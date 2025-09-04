from rest_framework import serializers
from .models import Product
from app.category.models import Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "title"] 
class ProductSerializer(serializers.ModelSerializer):
    category = serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all(),
        write_only=True 
    )   
    category_info = CategorySerializer(source="category", read_only=True) 
    class Meta:
        model = Product
        fields = "__all__"