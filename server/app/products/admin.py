from django.contrib import admin
from .models import Product

admin.site.register(Product)  # ✅ This makes Product visible in admin
