from django.db import models
from django.contrib.auth.models import User


class Ad(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    class Meta:
        abstract = True


class ItemsWantedAd(Ad):
    item = models.CharField(max_length=100)


class ItemsForSaleAd(Ad):
    item = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)


class AcademicServicesAd(Ad):
    service_type = models.CharField(max_length=100)
