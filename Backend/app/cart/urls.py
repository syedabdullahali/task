from django.urls import path
from . import views

urlpatterns = [
    path("add/", views.add_to_cart, name="add-to-cart"),
    path("update/", views.update_cart, name="update-cart"),
    path("cart_list/", views.get_cart, name="get-cart"),
]
