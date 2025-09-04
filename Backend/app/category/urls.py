# app/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.category_list, name='category-list'),     
    path('create/', views.category_create, name='category-create'),  
    path('<int:pk>/', views.category_detail, name='category-detail'), 
    path('<int:pk>/delete/', views.category_delete, name='category-delete'),
]
