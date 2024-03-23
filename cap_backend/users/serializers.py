from django.contrib.auth import get_user_model
from rest_framework import serializers

UserModel = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        # the create user method hashes the password
        user = UserModel.objects.create_user(
            username=validated_data["username"],
            password=validated_data["password"],
            email=validated_data["email"],
        )
        return user

    def validate_email(self, value):
        if UserModel.objects.filter(email=value).exists():
            raise serializers.ValidationError("A user with that email already exists.")
        return value

    class Meta:
        model = UserModel
        fields = ("id", "username", "password", "email")
