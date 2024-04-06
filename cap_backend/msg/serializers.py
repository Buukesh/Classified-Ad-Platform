from ads.serializers import AdSerializer
from django.contrib.auth import get_user_model
from rest_framework import serializers
from users.serializers import PublicUserSerializer

from .models import Conversation, Message

UserModel = get_user_model()


class MessageSerializer(serializers.ModelSerializer):
    # rename fields
    sender_id = serializers.IntegerField(source="sender.id", read_only=True)
    sender = serializers.SerializerMethodField()

    class Meta:
        model = Message
        fields = ("id", "conversation", "message", "sender", "timestamp", "sender_id")
        read_only_fields = ("id", "sender", "timestamp", "conversation", "sender_id")

    def get_sender(self, obj):
        # set the sender flag by comparing the one who made the request and the one in
        # the message
        user = self.context.get("request").user
        # these are flipped in the frontend for some reason
        return "receiver" if obj.sender == user else "sender"


class ConversationSerializer(serializers.ModelSerializer):
    initiator = PublicUserSerializer(read_only=True)
    messages = MessageSerializer(many=True, read_only=True)
    ad = AdSerializer(read_only=True)

    class Meta:
        model = Conversation
        fields = ("id", "ad", "initiator", "messages")
        depth = 1
