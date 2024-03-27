from rest_framework import serializers

from .models import Ad, AdImage


class AdImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdImage
        fields = "__all__"
        # the ad serializer creates the ad
        read_only_fields = ("ad",)


class AdSerializer(serializers.ModelSerializer):
    images = AdImageSerializer(many=True, required=False)

    class Meta:
        model = Ad
        fields = "__all__"
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
