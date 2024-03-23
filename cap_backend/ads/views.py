from django.shortcuts import render
from rest_framework import generics

from .models import Ad
from .serializers import AdSerializer


class AdListCreateAPIView(generics.ListCreateAPIView):
    queryset = Ad.objects.all()
    serializer_class = AdSerializer
