# from django.db import models
# from django.conf import settings
# from products.models import Product

# User = settings.AUTH_USER_MODEL

# class Cart(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="cart")
#     created_at = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return f"Cart({self.user.username})"

#     @property
#     def total_price(self):
#         return sum(item.subtotal for item in self.items.all())


# class CartItem(models.Model):
#     cart = models.ForeignKey(Cart, related_name="items", on_delete=models.CASCADE)
#     product = models.ForeignKey(Product, on_delete=models.CASCADE)
#     quantity = models.PositiveIntegerField(default=1)

#     class Meta:
#         unique_together = ("cart", "product")  # prevent duplicate entries

#     def __str__(self):
#         return f"{self.product.title} x {self.quantity}"

#     @property
#     def subtotal(self):
#         return self.product.price * self.quantity
