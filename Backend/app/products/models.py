from django.db import models
from django.utils import timezone

class Product(models.Model):
    title = models.CharField(max_length=255)
    discount = models.DecimalField(max_digits=10, decimal_places=2, default=0)  # Add default
    description = models.TextField(blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    image = models.JSONField(blank=True, null=True)
    category = models.ForeignKey('category.Category',on_delete=models.CASCADE,null=True,blank=True)
    type = models.CharField(max_length=125,default="General")
    mtg = models.DateTimeField(default=timezone.now, null=True, blank=True)
    show_on_layout = models.BooleanField(default=True)
    related_products = models.ManyToManyField('self',blank=True)
    def __str__(self):
        return self.title
    
    