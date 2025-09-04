from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.register_user, name='register'),
    path('login/', views.login, name='login'),
    path('refresh/', views.token_refresh, name='token_refresh'),
    path('', views.user_list, name='user-list'),
    path('create/', views.user_create, name='user-create'),
    path('<int:pk>/', views.user_detail, name='user-detail'),
    path('<int:pk>/delete/', views.user_delete, name='user-delete'),
]