from rest_framework.response import Response
from rest_framework import status
from Users.serializers  import UserSerializer
from Users.models import User
from rest_framework.generics import GenericAPIView
from rest_framework.views import APIView
from .serializers import  MyTokenObtainPairSerializer
from rest_framework.permissions import AllowAny
from rest_framework.decorators import permission_classes

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)
class UserRegistration(APIView):
    def post(self, request, *args, **kwargs):
        user = UserSerializer(data=request.data)
        if user.is_valid():
            user.save()
            return Response({"message":"Registration was successfull"}, status=status.HTTP_201_CREATED)
        return Response(user.errors, status=status.HTTP_400_BAD_REQUEST)

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class UserViews(APIView):
    def get(self, request, *args, **kwargs):
        users=User.objects.all()
        serielizedData = UserSerializer(users, many=True)
        return Response(serielizedData.data, status=status.HTTP_201_CREATED)

