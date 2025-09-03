from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, get_user_model
from rest_framework_simplejwt.tokens import RefreshToken
import json
User = get_user_model()
from django.contrib.auth.hashers import make_password


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

        # username = request.POST.get('username')
        # password = request.POST.get('password')

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
