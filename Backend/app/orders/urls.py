from django.urls import path
from . import views

urlpatterns = [
    path('create/', views.create_order, name='create-order'), 
    path('list/', views.list_orders, name='list-orders'), 
    path('management/list/', views.admin_orders, name='admin-orders-list'), 
    path('management/<int:order_id>/update-status/', views.update_order_status, name='update-order-status'),
    path('management/<int:order_id>/delete/', views.update_order_status, name='update-order-status'),
    path('<int:order_id>/invoice/', views.generate_invoice, name='generate_invoice'),
]