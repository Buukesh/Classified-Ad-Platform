from rest_framework import serializers
from users.serializers import PublicUserSerializer

from .models import Ad, AdImage


class AdImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdImage
        fields = ("id", "ad", "image")
        # the ad serializer creates the ad
        read_only_fields = ("ad",)


class AdSerializer(serializers.ModelSerializer):
    images = AdImageSerializer(many=True, read_only=True)
    user = PublicUserSerializer(read_only=True)

    class Meta:
        model = Ad
        fields = (
            "id",
            "title",
            "content",
            "date",
            "modified",
            "user",
            "price",
            "category",
            "item",
            "images",
        )
        # the user serializer creates this so not needed
        read_only_fields = ("user",)

    def create(self, validated_data):
        # get images from file upload in request
        request = self.context.get("request")
        images = request.FILES.getlist("images") if request else []

        ad = Ad.objects.create(**validated_data)
        # create ad image instance for each image
        for image in images:
            AdImage.objects.create(ad=ad, image=image)
        return ad
