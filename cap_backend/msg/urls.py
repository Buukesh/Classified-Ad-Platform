from django.urls import path

from . import views

urlpatterns = [
    path("", views.MessageCreateView.as_view()),
    path("/conversations", views.ConversationListView.as_view()),
]
