import json
import logging

from ads.models import Ad
from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
from django.shortcuts import get_object_or_404
from rest_framework.authtoken.models import Token

from .models import Conversation, Message

logger = logging.getLogger("mylogger")


class ChatConsumer(WebsocketConsumer):
    def connect(self):
        # get token from request param
        token = self.scope["query_string"].decode("utf-8").split("=")[1]
        user = self.get_user(token)

        logger.info("Connecting")

        if user:
            # save info for later
            self.scope["user"] = user
            self.user_group_name = f"user_{user.id}"

            # add to user group for receiving messages
            # how it works is other users can send to this group by using the id
            async_to_sync(self.channel_layer.group_add)(
                self.user_group_name, self.channel_name
            )

            self.accept()
            logger.info("Accepted")
        else:
            self.close()
            logger.info("Invalid token, closed websocket")

    def disconnect(self, close_code):
        if hasattr(self, "user_group_name"):
            async_to_sync(self.channel_layer.group_discard)(
                self.user_group_name, self.channel_name
            )

    def receive(self, text_data=None, bytes_data=None):
        data = json.loads(text_data)
        message = data["message"]
        ad_id = data["ad_id"]
        convo_id = data["convo_id"]

        logger.info("Received message")

        user = self.scope["user"]
        new_msg = None
        if user.is_authenticated:
            new_msg = self.save_message(ad_id, user, message)
        else:
            return

        # get ad from id
        poster_id = None
        try:
            ad = Ad.objects.get(pk=ad_id)
            poster_id = ad.user.id
        except Ad.DoesNotExist:
            logger.error("Ad doesn't exist.")
            return

        # get convo from id
        initiator_id = None
        try:
            conversation = Conversation.objects.get(pk=convo_id)
            initiator_id = conversation.initiator.id
        except Conversation.DoesNotExist:
            logger.error("Conversation doesn't exist.")
            return

        # the recipient can be found out because conversations are always 1 to 1
        # so if the sender is the ad poster, the recipient is the initiator
        recipient_id = None
        if user.id == initiator_id:
            recipient_id = poster_id
        elif user.id == poster_id:
            recipient_id = initiator_id
        else:
            logger.error("Invalid user id.")
            return

        # send message to recipient group (this sends to the other user's websocket)
        # the "sender": "sender" part is for the frontend (daisy ui)
        recipient_group_name = f"user_{recipient_id}"
        async_to_sync(self.channel_layer.group_send)(
            recipient_group_name,
            {"type": "chat_message", "message": new_msg, "sender": "sender"},
        )

        # send back new msg object to sender to keep synced
        async_to_sync(self.channel_layer.group_send)(
            self.user_group_name,
            {"type": "chat_message", "message": new_msg, "sender": "receiver"},
        )

    def chat_message(self, event):
        message = event["message"]
        sender = event["sender"]

        # manually serialize the message
        self.send(
            text_data=json.dumps(
                {
                    "id": message.id,
                    "conversation": message.conversation.id,
                    "message": message.message,
                    "sender_id": message.sender.id,
                    "timestamp": message.timestamp.isoformat(),
                    "sender": sender,
                }
            )
        )

    def get_user(self, token):
        # check db for token
        try:
            user = Token.objects.get(key=token).user
            return user
        except Token.DoesNotExist:
            return None

    def save_message(self, ad_id, user, message):
        # same logic as the message create view
        ad = get_object_or_404(Ad, pk=ad_id)
        # find or create the conversation
        conversation, _ = Conversation.objects.get_or_create(
            ad=ad, defaults={"initiator": user}
        )
        # then add message to db
        return Message.objects.create(
            conversation=conversation, sender=user, message=message
        )
