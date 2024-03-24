from django.urls import path

from . import views

urlpatterns = [
    path("", views.MessageCreateView.as_view()),
]
