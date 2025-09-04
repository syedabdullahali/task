from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models

class User(AbstractUser):
    fullName = models.TextField(default='')
    email = models.EmailField(unique=True)
    role = models.CharField(
        max_length=20,
        choices=(
            ("user", "User"),
            ("admin", "Admin"),
        ),
        default="user"
    )
    created_at = models.DateTimeField(auto_now_add=True)
    USERNAME_FIELD = 'email'        
    REQUIRED_FIELDS = ['username'] 
    REQUIRED_FIELDS = ['fullName']  
    def __str__(self):
        return self.username
    
    