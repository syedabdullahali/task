from django.urls import path
from . import views

urlpatterns = [
    path('group/', views.product_grouped, name='product_list'),
    path('details/<int:product_id>/', views.product_details, name='product_list'),
    path('create/', views.product_create, name='product_create'),
    path('<int:pk>/update/', views.product_update, name='product_update'),
    path('<int:pk>/delete/', views.product_delete, name='product_delete'),
]
