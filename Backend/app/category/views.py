from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from .models import Category
from .serializers import CategorySerializer
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.db.models import Q
from rest_framework.permissions import IsAdminUser
# List all categories with pagination and search
@api_view(['GET'])
@permission_classes([IsAdminUser])
def category_list(request):
    try:
        search = request.GET.get('search', '')
        page = request.GET.get('page', 1)
        page_size = request.GET.get('page_size', 10)

        categories = Category.objects.all().order_by('-created_at')

        if search:
            categories = categories.filter(Q(title__icontains=search))

        paginator = Paginator(categories, page_size)
        try:
            categories_page = paginator.page(page)
        except PageNotAnInteger:
            categories_page = paginator.page(1)
        except EmptyPage:
            categories_page = paginator.page(paginator.num_pages)

        serializer = CategorySerializer(categories_page, many=True)

        return Response({
            "success": True,
            "message": "Categories fetched successfully",
            "data": serializer.data,
            "pagination": {
                "total_items": paginator.count,
                "total_pages": paginator.num_pages,
                "current_page": categories_page.number,
                "page_size": paginator.per_page
            }
        })

    except Exception as e:
        return Response({"success": False, "message": str(e), "data": None}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
@permission_classes([IsAdminUser])
def category_create(request):
    try:
        serializer = CategorySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"success": True, "message": "Category created successfully", "data": serializer.data}, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response({"success": False, "message": str(e), "data": None}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'PATCH'])
@permission_classes([IsAdminUser])
def category_detail(request, pk):
    try:
        category = Category.objects.get(pk=pk)
    except Category.DoesNotExist:
        return Response({"success": False, "message": "Category not found", "data": None}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = CategorySerializer(category)
        return Response({"success": True, "message": "Category retrieved successfully", "data": serializer.data})

    elif request.method in ['PUT', 'PATCH']:
        partial = request.method == 'PATCH'
        serializer = CategorySerializer(category, data=request.data, partial=partial)
        try:
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response({"success": True, "message": "Category updated successfully", "data": serializer.data})
        except Exception as e:
            return Response({"success": False, "message": str(e), "data": None}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def category_delete(request, pk):
    try:
        category = Category.objects.get(pk=pk)
        category.delete()
        return Response({"success": True, "message": "Category deleted successfully", "data": None})
    except Category.DoesNotExist:
        return Response({"success": False, "message": "Category not found", "data": None}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({"success": False, "message": str(e), "data": None}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
