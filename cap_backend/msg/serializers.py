from ads.serializers import AdSerializer
from django.contrib.auth import get_user_model
from rest_framework import serializers
from users.serializers import PublicUserSerializer

from .models import Conversation, Message

UserModel = get_user_model()


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ("id", "conversation", "message", "sender", "timestamp")
        read_only_fields = ("id", "sender", "timestamp", "conversation")


class ConversationSerializer(serializers.ModelSerializer):
    initiator = PublicUserSerializer(read_only=True)
    messages = MessageSerializer(many=True, read_only=True)
    ad = AdSerializer(read_only=True)

    class Meta:
        model = Conversation
        fields = ("id", "ad", "initiator", "messages")
        depth = 1
