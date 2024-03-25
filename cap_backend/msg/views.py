from ads.models import Ad
from django.shortcuts import get_object_or_404
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from .models import Conversation, Message
from .serializers import MessageSerializer


class MessageCreateView(generics.CreateAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        ad_id = self.request.data.get("ad_id")
        ad = get_object_or_404(Ad, pk=ad_id)
        # create conversation if not created already
        conversation, _ = Conversation.objects.get_or_create(
            ad=ad, defaults={"initiator": self.request.user}
        )
        serializer.save(sender=self.request.user, conversation=conversation)
