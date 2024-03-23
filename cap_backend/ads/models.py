from django.db import models
from django.contrib.auth.models import User


class Ad(models.Model):
    CATEGORY_CHOICES = [
        ("IW", "Items Wanted"),
        ("IS", "Items for Sale"),
        ("AS", "Academic Services"),
    ]

    title = models.CharField(max_length=100)
    content = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(max_length=2, choices=CATEGORY_CHOICES)
    item = models.CharField(max_length=100)

    def __str__(self):
        return self.title
