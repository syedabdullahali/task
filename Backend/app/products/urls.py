from django.urls import path
from . import views

urlpatterns = [
    path('group/', views.product_grouped, name='product_list'),
    path('footer_group/', views.product_grouped_Footer, name='product_list'),
    path('list_Search_By_name/', views.product_list_Search_By_name, name='product_list'),
    path('details/<int:product_id>/', views.product_details, name='product_list'),
    path('product_list_with_category/', views.product_list_with_category, name='product_list_with_category'),
    path('management/delete/<int:product_id>/', views.product_delete, name='product_delete'),
    path('management/', views.product_list_create, name='product-list-create'),
]
