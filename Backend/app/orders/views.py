from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from rest_framework.response import Response
from .serializers import OrderSerializer
from .models import Order,OrderItem
from app.products.models import Product
from app.cart.models import Cart
from django.http import JsonResponse
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from rest_framework import status
from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer
from .email import send_order_invoice_email
from django.shortcuts import  get_object_or_404
from django.http import HttpResponse
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from .models import Order

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_order(request):
    serializer = OrderSerializer(data=request.data, context={'request': request})
    if serializer.is_valid():
        order = serializer.save()
        Cart.objects.filter(user=request.user).delete()
        return Response({
            "success": True,
            "data": OrderSerializer(order).data
        }, status=201)
    return Response({
        "success": False,
        "errors": serializer.errors
    }, status=400)
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def list_orders(request):
    try:
        status_query =    request.GET.get('status', 'pending')
        orders = Order.objects.filter(user=request.user ,status=status_query).prefetch_related('items__product').order_by('-created_at')
        serializer = OrderSerializer(orders, many=True)
        return Response({
            "success": True,
            "data": serializer.data
        }, status=200)
    except Exception as e:
        return Response({
            "success": False,
            "error": str(e)
        }, status=500)
    
def generate_invoice(request, order_id):
    try:
        order = Order.objects.get(id=order_id)
    except Order.DoesNotExist:
        return HttpResponse("Order not found", status=404)

    # Create the HttpResponse object with PDF headers
    response = HttpResponse(content_type='application/pdf')
    response['Content-Disposition'] = f'attachment; fileName="invoice_{order.id}.pdf"'

    # Create the PDF object
    pdf = canvas.Canvas(response, pagesize=A4)
    width, height = A4
    y = height - 50

    # Invoice Title
    pdf.setFont("Helvetica-Bold", 16)
    pdf.drawString(50, y, f"Invoice - CTH-{order.id}")
    y -= 30

    # User Info
    pdf.setFont("Helvetica", 12)
    pdf.drawString(50, y, f"Customer Name: {order.user.first_name} {order.user.last_name}")
    y -= 20
    pdf.drawString(50, y, f"Email: {order.user.email}")
    y -= 20
    if hasattr(order.user, 'phone'):
        pdf.drawString(50, y, f"Phone: {order.user.phone}")
        y -= 20

    # Order Info
    pdf.drawString(50, y, f"Destination: {order.destination}")
    y -= 20
    pdf.drawString(50, y, f"Status: {order.status}")
    y -= 30

    # Table Header
    pdf.setFont("Helvetica-Bold", 12)
    pdf.drawString(50, y, "Product")
    pdf.drawString(250, y, "Price")
    pdf.drawString(350, y, "Quantity")
    pdf.drawString(450, y, "Total")
    y -= 20

    # Table Items
    pdf.setFont("Helvetica", 12)
    for item in order.items.all():  # Assuming items is a related_name from OrderItem
        discount_amount = (item.product.discount / 100) * item.product.price
        price_after_discount = item.product.price - discount_amount
        total_price = price_after_discount * item.quantity

        pdf.drawString(50, y, item.product.title)
        pdf.drawString(250, y, f"${price_after_discount:.2f}")
        pdf.drawString(350, y, str(item.quantity))
        pdf.drawString(450, y, f"${total_price:.2f}")
        y -= 20

        # Add discount info if any
        if discount_amount > 0:
            pdf.setFont("Helvetica-Oblique", 10)
            pdf.drawString(50, y, f"  (Discount: ${discount_amount:.2f} per item)")
            pdf.setFont("Helvetica", 12)
            y -= 15

    y -= 20
    pdf.setFont("Helvetica-Bold", 12)
    pdf.drawString(50, y, f"Total Amount: ${order.total_amount_with_discounte:.2f}")

    # Finish up
    pdf.showPage()
    pdf.save()
    return response

@api_view(['GET'])
@permission_classes([IsAdminUser])
def admin_orders(request):
    try:
        orders = Order.objects.all().prefetch_related('items__product').order_by('-created_at')

        status_filter = request.GET.get("status")
        if status_filter:
            orders = orders.filter(status=status_filter)

        payment_status_filter = request.GET.get("payment_status")
        if payment_status_filter:
            orders = orders.filter(payment_status=payment_status_filter)

        total_pending = orders.filter(status="pending").count()
        total_cancelled = orders.filter(status="cancelled").count()
        total_completed = orders.filter(status="completed").count()
        total_shipped = orders.filter(status="shipped").count()

        total_payment_pending = orders.filter(payment_status="pending").count()
        total_payment_paid = orders.filter(payment_status="paid").count()
        total_payment_failed = orders.filter(payment_status="failed").count()

        page = request.GET.get("page", 1)
        page_size = request.GET.get("page_size", 20)

        paginator = Paginator(orders, page_size)
        try:
            paged_orders = paginator.page(page)
        except PageNotAnInteger:
            paged_orders = paginator.page(1)
        except EmptyPage:
            paged_orders = paginator.page(paginator.num_pages)

        serializer = OrderSerializer(paged_orders, many=True)

        response_data = {
            "success": True,
            "data": serializer.data,
            "stats": {
                "order_status": {
                    "pending": total_pending,
                    "cancelled": total_cancelled,
                    "completed": total_completed,
                    "shipped": total_shipped,
                },
                "payment_status": {
                    "pending": total_payment_pending,
                    "paid": total_payment_paid,
                    "failed": total_payment_failed,
                }
            },
            "pagination": {
                "current_page": paged_orders.number,
                "total_pages": paginator.num_pages,
                "page_size": int(page_size),
                "total_items": paginator.count
            }
        }

        return Response(response_data, status=200)

    except Exception as e:
        print("error:", str(e))
        return Response({"success": False, "error": str(e)}, status=500)
    
@api_view(['PATCH'])
@permission_classes([IsAdminUser])
def update_order_status(request, order_id):
    try:
        order = Order.objects.get(id=order_id)
    except Order.DoesNotExist:
        return Response({"success": False, "error": "Order not found"}, status=404)

    status = request.GET.get("status")
    payment_status = request.GET.get("payment_status")

    if status:
        order.status = status.lower()
    if payment_status:
        order.payment_status = payment_status.lower()

    order.save()

    serializer = OrderSerializer(order)
    channel_layer = get_channel_layer()
    async_to_sync(channel_layer.group_send)(
        "orders",
        {"type": "order_update", "data": serializer.data}
    )
    print(order.status,order.user.email,order.user.fullName)
    if order.status in ["shipped", "completed", "canceled"]:
        send_order_invoice_email(order)

    return Response({"success": True, "data": serializer.data}, status=200)    


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def delete_order(request, order_id):
    try:
        order = get_object_or_404(Order, id=order_id)
        order_data = OrderSerializer(order).data  # Serialize before deleting
        order.delete()

        # Notify via channels (if you want to keep real-time updates)
        channel_layer = get_channel_layer()
        async_to_sync(channel_layer.group_send)(
            "orders",
            {"type": "order_update", "data": {"action": "deleted", "order": order_data}}
        )
        return Response({"success": True, "message": "Order deleted successfully", "data": order_data}, status=200)
    except Exception as e:
        return Response({"success": False, "error": str(e)}, status=400)