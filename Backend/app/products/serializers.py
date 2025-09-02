# from rest_framework import serializers
# from .models import Cart, CartItem, Order, OrderItem
# from catalog.models import Product
# from decimal import Decimal

# class CartItemSerializer(serializers.ModelSerializer):
#     product_title = serializers.ReadOnlyField(source="product.title")
#     class Meta:
#         model = CartItem
#         fields = ["id","product","product_title","quantity"]

# class CartSerializer(serializers.ModelSerializer):
#     items = CartItemSerializer(many=True, read_only=True)
#     class Meta:
#         model = Cart
#         fields = ["id","is_active","items"]

# class AddCartItemSerializer(serializers.Serializer):
#     product_id = serializers.IntegerField()
#     quantity = serializers.IntegerField(min_value=1, default=1)
#     def validate(self, attrs):
#         try:
#             attrs["product"] = Product.objects.get(id=attrs["product_id"])
#         except Product.DoesNotExist:
#             raise serializers.ValidationError("Invalid product")
#         return attrs
#     def create(self, validated):
#         cart, _ = Cart.objects.get_or_create(user=self.context["request"].user, is_active=True)
#         item, created = CartItem.objects.get_or_create(cart=cart, product=validated["product"])
#         item.quantity = item.quantity + validated["quantity"] if not created else validated["quantity"]
#         item.save()
#         return item

# class OrderItemSerializer(serializers.ModelSerializer):
#     product_title = serializers.ReadOnlyField(source="product.title")
#     class Meta:
#         model = OrderItem
#         fields = ["product_title","price","quantity"]

# class OrderSerializer(serializers.ModelSerializer):
#     items = OrderItemSerializer(many=True, read_only=True)
#     class Meta:
#         model = Order
#         fields = ["id","total","status","created_at","payment_ref","items"]

# class CheckoutSerializer(serializers.Serializer):
#     # mock or stripe
#     use_stripe = serializers.BooleanField(default=False)
#     def create(self, validated):
#         user = self.context["request"].user
#         cart = Cart.objects.filter(user=user, is_active=True).prefetch_related("items__product").first()
#         if not cart or cart.items.count() == 0:
#             raise serializers.ValidationError("Cart empty")
#         total = sum(i.product.price * i.quantity for i in cart.items.all())
#         order = Order.objects.create(user=user, total=Decimal(total))
#         for i in cart.items.all():
#             OrderItem.objects.create(order=order, product=i.product, price=i.product.price, quantity=i.quantity)
#             i.product.stock = max(0, i.product.stock - i.quantity)
#             i.product.save(update_fields=["stock"])
#         cart.is_active = False
#         cart.save(update_fields=["is_active"])
#         return order
