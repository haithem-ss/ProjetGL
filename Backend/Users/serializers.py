from Users.models import User
from rest_framework import serializers
from rest_framework_simplejwt.serializers import (
    TokenObtainPairSerializer,
)

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id","email","nomEtablissement","prenom","nom"]

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        refresh = self.get_token(self.user)
        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)
        # Add extra responses here
        data['nom'] = self.user.nom
        data['id'] = self.user.id
        data['prenom'] = self.user.prenom
        data['email'] = self.user.email
        data['staff'] = self.user.is_staff
        return data