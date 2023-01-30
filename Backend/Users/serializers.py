from Users.models import User
from Cours.models import Cours
from rest_framework import serializers
from rest_framework_simplejwt.serializers import (
    TokenObtainPairSerializer,
)
from django.conf import settings

from rest_framework.exceptions import AuthenticationFailed



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "email", "nomEtablissement",
                  "prenom", "nom", "dateInscription", "phoneNumber", "bio", "image_url", "adresse"]

    def to_representation(self, instance):
        reps = super().to_representation(instance)
        reps['coursesCount'] = Cours.objects.filter(auteur=instance.id).count()
        return reps


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
