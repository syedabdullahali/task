from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .serializers import OrderSerializer
from .models import Order,OrderItem
from app.products.models import Product
from app.cart.models import Cart

from django.http import JsonResponse

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
