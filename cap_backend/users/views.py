from django.contrib.auth import get_user_model
from django.shortcuts import render
from rest_framework import generics

from .serializers import UserSerializer

UserModel = get_user_model()


class UserCreateView(generics.CreateAPIView):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer
