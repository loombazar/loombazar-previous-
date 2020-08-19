from django.db import models
from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from .managers import CLUserManager
# Create your models here.

class User(AbstractBaseUser,PermissionsMixin):
    first_name = models.CharField(max_length=100,null=False,blank=False)
    last_name = models.CharField(max_length=100,null=True,blank=True)
    mobile_number = models.CharField(max_length=20,null=False,blank=False)
    email = models.EmailField(null=False,blank=False,unique=True)
    password = models.CharField(max_length=200,null=False,blank=False)

    is_staff = models.BooleanField(default=True)
    is_active = models.BooleanField(default=True)


    USERNAME_FIELD = 'email'
    objects = CLUserManager()
    
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email
