from rest_framework import serializers
from .models import Order, OrderItem
from app.products.models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'title', 'description', 'price', 'image','discount']

class OrderItemSerializer(serializers.ModelSerializer):
    product_id = serializers.IntegerField(write_only=True)  
    product = ProductSerializer(read_only=True)             
    price = serializers.DecimalField(max_digits=10, decimal_places=2, read_only=True)  

    class Meta:
        model = OrderItem
        fields = ['product', 'product_id', 'quantity', 'price',]

class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True)  

    class Meta:
        model = Order
        fields = ['id', 'user', 'total_amount', 'status', 'stripe_payment_intent', 'created_at', 'items','destination','total_amount_with_discounte']
        read_only_fields = ['user', 'total_amount', 'status', 'created_at', 'stripe_payment_intent','total_amount_with_discounte']

    def create(self, validated_data):  
        items_data = validated_data.pop('items', [])
        user = self.context['request'].user
        destination = validated_data.get('destination', '')

        order = Order.objects.create(
            user=user,
            status='pending',
            total_amount=0,
            total_amount_with_discounte=0,
            destination=destination
        )

        total_amount = 0
        total_amount_with_discounte = 0

        for item in items_data:
            product = Product.objects.get(id=item['product_id'])
            quantity = item['quantity']
            discounted_price = product.price * (1 - product.discount / 100)

            total_amount += product.price * quantity
            total_amount_with_discounte += discounted_price * quantity

            OrderItem.objects.create(
                order=order,
                product=product,
                quantity=quantity,
                price=discounted_price
            )

        order.total_amount = total_amount
        order.total_amount_with_discounte = total_amount_with_discounte
        order.save()

        return order
