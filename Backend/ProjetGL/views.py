from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions


class home(APIView):
    # add permission to check if user is authenticated
    # permission_classes = [permissions.IsAuthenticated]
    def get(self, request, *args, **kwargs):
        return Response("we are up and running", status=status.HTTP_200_OK)
