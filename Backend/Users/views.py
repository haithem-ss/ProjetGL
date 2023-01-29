from rest_framework.response import Response
from rest_framework import status
from Users.serializers import UserSerializer
from Users.models import User
from rest_framework.views import APIView
import cloudinary
from cloudinary.uploader import upload
from django.http import JsonResponse


class UserRegistration(APIView):

    def post(self, request, *args, **kwargs):
        user = UserSerializer(data=request.data)
        if user.is_valid():
            user.save()
            return Response(user.data, status=status.HTTP_201_CREATED)
        return Response(user.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, *args, **kwargs):
        user = User.objects.get(pk=request.data['id'])
        user_serializer = UserSerializer(user)
        return Response(user_serializer.data, status=status.HTTP_201_CREATED)

    def put(self, request, *args, **kwargs):
        user = User.objects.get(pk=request.data['id'])
        user_serializer = UserSerializer(user, data=request.data)
        if user_serializer.is_valid():
            user_serializer.save()
            return Response(user_serializer.data, status=status.HTTP_201_CREATED)
        return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class Upload(APIView):
    def post(self, request, *args, **kwargs):
        cloudinary.config(
            cloud_name="dlmx3rkjk",
            api_key="889174241674913",
            api_secret="5RDvsRMvl3n4edm2ce_iZtGFUm4"
        )
        image = request.data['image']
        image = upload(image, folder="Users/ProfilePictures/")
        return JsonResponse(image, safe=False)
