from rest_framework import generics
from rest_framework.parsers import JSONParser, MultiPartParser
from rest_framework.permissions import AllowAny, IsAuthenticated

from .models import Ad
from .serializers import AdSerializer


class AdListCreateAPIView(generics.ListCreateAPIView):
    queryset = Ad.objects.all()
    serializer_class = AdSerializer
    # for multipart form upload
    parser_classes = (MultiPartParser, JSONParser)

    def get_permissions(self):
        if self.request.method == "GET":
            # any user can see the ad list
            permission_classes = [AllowAny]
        else:
            # only authenticated users can post ads
            permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]

    def perform_create(self, serializer):
        # get user from request (using token)
        serializer.save(user=self.request.user)
