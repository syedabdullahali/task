# payment/views.py
import stripe
from django.conf import settings
from django.http import JsonResponse
from app.orders.email import send_order_invoice_email
from app.orders.models import Order
from app.cart.models import CartItem
from django.views.decorators.csrf import csrf_exempt
import json
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status

stripe.api_key = settings.STRIPE_SECRET_KEY

@api_view(["POST"])
def create_payment_intent(request):
    try:
        order_id = request.data.get("order_id") 
        if not order_id:
            return Response(
                {"success": False, "message": "Order ID is required"},
                status=status.HTTP_400_BAD_REQUEST
            )

        order = Order.objects.get(id=order_id)

        intent = stripe.PaymentIntent.create(
            amount=int(float(order.total_amount_with_discounte) * 100),
            currency="usd",
            metadata={"order_id": order.id},
        )

        return Response(
            {
                "success": True,
                "message": "Payment intent created successfully",
                "data": {"client_secret": intent.client_secret},
            },
            status=status.HTTP_200_OK,
        )

    except Order.DoesNotExist:
        return Response(
            {"success": False, "message": "Order not found"},
            status=status.HTTP_404_NOT_FOUND
        )
    except Exception as e:
        return Response(
            {"success": False, "message": str(e)},
            status=status.HTTP_400_BAD_REQUEST
        )

@csrf_exempt 
def stripe_webhook(request):
    payload = request.body.decode("utf-8")
    sig_header = request.META.get("HTTP_STRIPE_SIGNATURE")
    endpoint_secret = settings.STRIPE_WEBHOOK_SECRET
    
    try:
        event = stripe.Webhook.construct_event(
            payload, sig_header, endpoint_secret
        )
    except ValueError:
        return JsonResponse({"success": False, "message": "Invalid payload"}, status=400)
    except stripe.error.SignatureVerificationError:
        return JsonResponse({"success": False, "message": "Invalid signature"}, status=400)

    if event["type"] == "payment_intent.succeeded":
        intent = event["data"]["object"]
        order_id = intent.get("metadata", {}).get("order_id")
        if order_id:
            try:
                order = Order.objects.get(id=order_id)
                order.payment_status = "paid"
                send_order_invoice_email(order)
        

                order.stripe_payment_intent = intent["id"]
                order.save()
                CartItem.objects.filter(cart__user=order.user).delete()

                return JsonResponse({
                    "success": True,
                    "message": f"Order {order.id} marked as paid and cart cleared",
                    "data": {
                      "order_id": order.id,
                      "payment_intent": intent["id"],
                      "status": order.status
                  }
              })

            except Order.DoesNotExist:
                return JsonResponse({
                    "success": False,
                    "message": f"Order {order_id} not found"
                }, status=404)

    elif event["type"] == "payment_intent.payment_failed":
        intent = event["data"]["object"]
        return JsonResponse({
            "success": False,
            "message": f"Payment failed for {intent.get('id')}"
        }, status=400)

    return JsonResponse({
        "success": True,
        "message": f"Unhandled event type {event['type']}"
    }, status=200)

@api_view(["GET"])
def verify_payment(request, payment_intent_id):
    try:
        intent = stripe.PaymentIntent.retrieve(payment_intent_id)
        if intent.status == "succeeded":
            return Response({"success": True, "status": intent.status})
        return Response({"success": False, "status": intent.status})
    except Exception as e:
        return Response({"success": False, "error": str(e)}, status=400)