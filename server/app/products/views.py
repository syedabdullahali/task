from django.shortcuts import  get_object_or_404
from django.core.serializers import serialize
import json
from .models import Product
from app.category.models import Category

from django.http import JsonResponse
from django.db.models import Prefetch
from django.db.models import Count, Sum,Prefetch
from django.http import JsonResponse


def product_details(_, product_id):
    try:
        product = get_object_or_404(Product, id=product_id)

        data = {
            "id": product.id,
            "title": product.title,
            "discount": str(product.discount),
            "description": product.description,
            "price": str(product.price),
            "stock": product.stock,
            "created_at": product.created_at.isoformat(),
            "updated_at": product.updated_at.isoformat(),
            "image": product.image,
            "category": product.category.id if product.category else None,
            "type": product.type,
            "mtg": product.mtg.isoformat() if product.mtg else None,
            "show_on_layout": product.show_on_layout,
            "related_products": [
                {"id": rp.id, "title": rp.title, "price": str(rp.price)}
                for rp in product.related_products.all()
            ],
        }

        return JsonResponse({
            "success": True,
            "data": data
        }, status=200)

    except Exception as e:
        return JsonResponse({
            "success": False,
            "error": str(e)
        }, status=400)
    

def product_list(request):
   try: # print("Hello World..............")    
    products = Product.objects.all()    
    if products.exists():

        data = serialize('json', products) 
        data = json.loads(data) 

        return JsonResponse({
        "success": True,
        "data": data
        }, safe=False,status=200)
    else: 
        return JsonResponse({
            "success": False,
            "error": str(e)
         }, safe=False,status=200)
   
   except Exception as e:
        return JsonResponse({
            "success": False,
            "error": str(e)
        }, safe=False)
   

def product_grouped(request):
    try:
        categories = (
            Category.objects
            .annotate(
                total_products=Count("product"),
                total_stock=Sum("product__stock"),
                total_price=Sum("product__price"),
            )
            .order_by("-total_products") 
            .prefetch_related(
                Prefetch(
                    "product_set",

                    queryset=Product.objects
                    .filter(show_on_layout=True)
                    .only("id", "title", "price", "discount", "stock", "image")
                    .order_by("id"),

                    to_attr="prefetched_products"
                )
            )
        )

        categoriesData = []

        homeLayoutData1 = []
        homeLayoutData2 = []
        homeLayoutData3 = []

        for index, category in enumerate(categories, start=1): 
          products = [
            {
              "id": p.id,
              "title": p.title,
              "price": p.price,
              "discount": p.discount,
              "stock": p.stock,
              "image": p.image 
        }
        for p in category.prefetched_products
    ]
         
          categoriesData.append({
          "category_id": category.id,
          "category_title": category.title,
          })

          data_item = {
           "category_id": category.id,
           "category_title": category.title,
           "total_products": getattr(category, "total_products", 0),
           "total_stock": getattr(category, "total_stock", 0),
           "total_price": getattr(category, "total_price", 0),
           "products": products
         }
          
          if index == 1:
           homeLayoutData1.append(data_item)
          else:
           homeLayoutData3.append(data_item)


        return JsonResponse({
            "success": True,
            "categoriesData":  categoriesData,
            "homeLayoutData1": homeLayoutData1,
            "homeLayoutData2": homeLayoutData2,
            "homeLayoutData3": homeLayoutData3
        })
    
    except Exception as e:
        return JsonResponse({
            "success": False,
            "error": str(e)
        }, status=500)
    
# Cons of this approach

#👉 Performance issue appears if:
# You have many categories, and
# Each has lots of products.  

# Solution 
# A separate Pipeline That responsible only for category and product
# Due to urgency of completing this task i am going to use this way



def product_create(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)  
            title = data.get('title')
            price = data.get('price')
            category = data.get('category')
            product = Product.objects.create(title=title, price=price, category=category)
            return JsonResponse({
                "success": True,
                "message": "Product created successfully",
                "product_id": product.id
            })
        except Exception as e:
            return JsonResponse({"success": False, "error": str(e)}, status=400)

def product_update(request, pk):
    if request.method == "PUT": 
        try:
            product = get_object_or_404(Product, pk=pk)
            data = json.loads(request.body)
            product.title = data.get('title', product.title)
            product.price = data.get('price', product.price)
            product.category = data.get('category', product.category)
            product.save()
            return JsonResponse({
                "success": True,
                "message": "Product updated successfully"
            })
        except Exception as e:
            return JsonResponse({"success": False, "error": str(e)}, status=400)

def product_delete(request, pk):
    if request.method == "DELETE":
        try:
            product = get_object_or_404(Product, pk=pk)
            product.delete()
            return JsonResponse({
                "success": True,
                "message": "Product deleted successfully"
            })
        except Exception as e:
            return JsonResponse({"success": False, "error": str(e)}, status=400)
