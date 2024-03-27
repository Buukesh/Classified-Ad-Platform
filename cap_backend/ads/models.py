from django.contrib.auth.models import User
from django.db import models


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


class AdImage(models.Model):
    ad = models.ForeignKey(Ad, on_delete=models.CASCADE)
    # this is a subfolder, so path is media/ad_images/
    image = models.ImageField(upload_to="ad_images/")
