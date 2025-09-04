from django.shortcuts import  get_object_or_404
from django.core.serializers import serialize
import json
from .models import Product
from app.category.models import Category

from django.http import JsonResponse
from django.db.models import Prefetch
from django.db.models import Count, Sum,Prefetch
from django.http import JsonResponse
import math
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from rest_framework import status
from .models import Product
from .serializers import ProductSerializer
from django.db.models import Q
from django.core.paginator import Paginator


def product_details(_, product_id):
    try:
        product = get_object_or_404(Product, id=product_id)

        data = {
            "id": product.id,
            "title": product.title,
            "discount": str(product.discount),
            "description": product.description,
            "price": str(product.price),
            "created_at": product.created_at.isoformat(),
            "updated_at": product.updated_at.isoformat(),
            "image": product.image,
            "category": product.category.id if product.category else None,
            "type": product.type,
            "mtg": product.mtg.isoformat() if product.mtg else None,
            "show_on_layout": product.show_on_layout,
            "related_products": [
                {
                    "id": rp.id, "title": rp.title, "price": str(rp.price),
                    "discount":rp.discount,"image":rp.image
                }
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
   
def product_list_Search_By_name(request):
   try: # print("Hello World..............")    
     search_query = request.GET.get('search', '')
     products = Product.objects.filter(title__icontains=search_query).order_by('-id')[:5].values('id', 'title', 'price', 'discount','image')
    #  products = products.order_by('-id')


     if products.exists():
        # data = serialize('json', list(products)) 
        data = list(products)
    
        return JsonResponse({
        "success": True,
        "data": data
        }, safe=False,status=200)
     
     else: 
        return JsonResponse({
            "success": False,
            "data": [],
            "message": "No products found"
         }, safe=False,status=200)
   
   except Exception as e:
        return JsonResponse({
            "success": False,
            "error": str(e)
}, safe=False)
   


def product_list_with_category(request):
   try: # print("Hello World..............")
    categoryId =    request.GET.get('categoryId')
    search_query =    request.GET.get('search', '')

    page = int(request.GET.get("page", 1))
    page_limit = int(request.GET.get("page_limit", 20))
  
    start = (page - 1) * page_limit
    end = start + page_limit

    search_query = request.GET.get('search', '')
    categoryId = request.GET.get('categoryId', 0)

    if search_query:
     products_data = Product.objects.filter(title__icontains=search_query)
    else:
     products_data = Product.objects.all()

    if products_data.exists():
     
        if categoryId and int(categoryId) != 0:
          products_data = products_data.filter(category=categoryId)
            

        total_products = products_data.count()
        total_pages = math.ceil(total_products /page_limit ) 

        start = (page - 1) * page_limit
        end = start + page_limit
        products_data = products_data[start:end].values('id', 'title', 'price', 'discount', 'image')

        # Categories for frontend
        categoryData = Category.objects.values('id', 'title')

        return JsonResponse({
        "success": True,
        "data": list(products_data),
        "total_products":total_products,
        "categoryData":list(categoryData),
        "total_pages":total_pages,
        "currentPage":page
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
                total_price=Sum("product__price"),
            )
            .order_by("-total_products") 
            .prefetch_related(
                Prefetch(
                    "product_set",

                    queryset=Product.objects
                    .filter(show_on_layout=True)
                    .only("id", "title", "price", "discount", "image")
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
              "image": p.image 
        }
        for p in category.prefetched_products
    ]
         
          categoriesData.append({
          "id": category.id,
          "title": category.title,
          })

          data_item = {
           "category_id": category.id,
           "category_title": category.title,
           "total_products": getattr(category, "total_products", 0),
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
def product_grouped_Footer(request):
    try:
        categories = (
            Category.objects
            .annotate(total_products=Count("product"))
            .order_by("-total_products")
            .prefetch_related(
                Prefetch(
                    "product_set",
                    queryset=Product.objects.filter(show_on_layout=True).only("id", "title"),
                    to_attr="prefetched_products"  # store prefetched results in this attribute
                )
            )
        )

        data_items = []

        for category in categories:
            products = [
                {
                    "id": p.id,
                    "title": p.title
                }
                for p in getattr(category, "prefetched_products", [])
            ]

            data_items.append({
                "category_id": category.id,
                "category_title": category.title,
                "products": products
            })

        return JsonResponse({
            "success": True,
            "data": data_items,
        })

    except Exception as e:
        return JsonResponse({
            "success": False,
            "error": str(e)
        }, status=500)
# Cons of this approach

# Performance issue appears if:
# You have many categories, and
# Each has lots of products.  

# Solution 
# A separate Pipeline That responsible only for category and product
# Due to urgency of completing this task i am going to use this way


@api_view(['GET', 'POST'])
@permission_classes([IsAdminUser])
def product_list_create(request):
    if request.method == 'GET':
        search = request.GET.get('search', '').strip()
        page = int(request.GET.get('page', 1))
        page_size = int(request.GET.get('page_size', 10))

        products = Product.objects.all()
        if search:
            products = products.filter(Q(title__icontains=search) | Q(description__icontains=search))

        paginator = Paginator(products, page_size)
        page_obj = paginator.get_page(page)
        serializer = ProductSerializer(page_obj.object_list, many=True)

        return Response({
            "success": True,
            "data": serializer.data,
            "pagination": {
                "current_page": page_obj.number,
                "total_pages": paginator.num_pages,
                "total_items": paginator.count,
                "page_size": page_size,
                "has_next": page_obj.has_next(),
                "has_previous": page_obj.has_previous(),
            }
        })

    elif request.method == 'POST':
        serializer = ProductSerializer(data=request.data)
        print(request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"success": True, "data": serializer.data}, status=status.HTTP_201_CREATED)
        return Response({"success": False, "errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST
                        )

@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def product_delete(request, product_id):
    try:
        product = get_object_or_404(Product, pk=product_id)
        product.delete()
        return JsonResponse({
            "success": True,
            "message": "Product deleted successfully"
        })
    except Exception as e:
        return JsonResponse({"success": False, "error": str(e)}, status=400)