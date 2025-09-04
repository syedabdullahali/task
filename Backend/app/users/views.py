from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, get_user_model
from rest_framework_simplejwt.tokens import RefreshToken
import json
User = get_user_model()
from django.contrib.auth.hashers import make_password
from rest_framework.response import Response
from rest_framework import status
from django.core.paginator import Paginator
from django.db.models import Q
from .serializers import UserSerializer

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser
from rest_framework.pagination import PageNumberPagination


@csrf_exempt
def register_user(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body.decode("utf-8"))

            username = data.get("email")
            fullName = data.get("fullName")
            email = data.get("email")
            role = data.get("role", "user")
            password = data.get("password")
            password2 = data.get("password2")

            if not username or not email or not password:
                return JsonResponse({"message": "Emmail, and password required","success":False}, status=400)

            if password != password2:
                return JsonResponse({"message": "Passwords do not match","success":False}, status=400)



            if User.objects.filter(email=email).exists():
                return JsonResponse({"message": "Email already exists","success":False}, status=400)

            user = User.objects.create(
                fullName= fullName,
                username=email,
                email=email,
                role=role,
                password=make_password(password) 
            )

            return JsonResponse({"message": "User registered successfully", "id": user.id,"success":True}, status=201)

        except Exception as e:
            return JsonResponse({"message": "Invalid request method","error": str(e),"success":False}, status=400)

    return JsonResponse({"message": "Invalid request method","success":False}, status=405)

@csrf_exempt
def login(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode("utf-8"))


        email = data.get("email")
        password = data.get("password")

        user = authenticate(request, username=email, password=password)


        if user is None:
            return JsonResponse({
                "message":"Invalid credentials",
                "success":False
                }, status=401)

        refresh = RefreshToken.for_user(user)
        return JsonResponse({
            "refresh": str(refresh),
            "success":True,
            "access": str(refresh.access_token),
            "message":"Login Successfully",
            "user": {
                "id": user.id,
                "username": user.username,
                "email": user.email,
                "role": user.role
            }
        })

    return JsonResponse({"message": "Only POST method allowed","success":False}, status=405)


from rest_framework_simplejwt.views import TokenRefreshView

@csrf_exempt
def token_refresh(request):
    return TokenRefreshView.as_view()(request)

# View
@api_view(['GET'])
@permission_classes([IsAdminUser])
def user_list(request):
    search = request.GET.get('search', '').strip()
    page = int(request.GET.get('page', 1))
    page_size = int(request.GET.get('page_size', 5))

    users = User.objects.all()
    if search:
     users = users.filter(
        Q(email__icontains=search) | Q(fullName__icontains=search)
     )

    total = users.count()
    start = (page - 1) * page_size
    end = start + page_size
    users_paginated = users[start:end]

    serializer = UserSerializer(users_paginated, many=True)

    return Response({
        "success": True,
        "message": "Users fetched successfully",
        "data": serializer.data,
        "total": total,
        "page": page,
        "page_size": page_size,
        "total_pages": (total + page_size - 1) // page_size
    })
# Create a new user
@api_view(['POST'])
def user_create(request):
    try:
        data = request.data.copy() 
        role = data.get('role', '').lower()
        print(role)

        serializer = UserSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        if role == 'admin':
            user.is_staff = True
            user.is_superuser = True
            user.username = data.get('email')
            user.save()

        return Response({
            "success": True,
            "message": "User created successfully",
            "data": serializer.data
        }, status=status.HTTP_201_CREATED)

    except Exception as e:
        return Response({
            "success": False,
            "message": str(e),
            "data": None
        }, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'PATCH'])
def user_detail(request, pk):
    try:
        user = User.objects.get(pk=pk)
    except User.DoesNotExist:
        return Response({"success": False, "message": "User not found", "data": None}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = UserSerializer(user)
        return Response({"success": True, "message": "User retrieved successfully", "data": serializer.data})

    elif request.method in ['PUT', 'PATCH']:
        partial = request.method == 'PATCH'
        serializer = UserSerializer(user, data=request.data, partial=partial)
        try:
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response({"success": True, "message": "User updated successfully", "data": serializer.data})
        except Exception as e:
            return Response({"success": False, "message": str(e), "data": None}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def user_delete(request, pk):
    try:
        user = User.objects.get(pk=pk)
        user.delete()
        return Response({"success": True, "message": "User deleted successfully", "data": None})
    except User.DoesNotExist:
        return Response({"success": False, "message": "User not found", "data": None}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({"success": False, "message": str(e), "data": None}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
