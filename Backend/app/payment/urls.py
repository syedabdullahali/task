# payment/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('create-intent/', views.create_payment_intent, name='create-intent'),
    path('webhook', views.stripe_webhook, name='stripe-webhook'),
    path('verify/<str:payment_intent_id>/', views.verify_payment, name='verify_payment'),
]

