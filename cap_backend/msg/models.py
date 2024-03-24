from ads.models import Ad
from django.contrib.auth import get_user_model
from django.db import models

UserModel = get_user_model()


class Conversation(models.Model):
    ad = models.ForeignKey(Ad, on_delete=models.CASCADE)
    # if someone is interested in the ad, they can start a conversation
    initiator = models.ForeignKey(UserModel, on_delete=models.CASCADE)

    def __str__(self):
        return f"Conversation: {self.ad}"


class Message(models.Model):
    conversation = models.ForeignKey(Conversation, on_delete=models.CASCADE)
    message = models.TextField()
    sender = models.ForeignKey(UserModel, on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message: {self.sender}"
