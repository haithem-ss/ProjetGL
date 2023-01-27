from rest_framework import serializers
from .models import Adresse, Module, Cours
from Users.serializers import UserSerializer

class AdresseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Adresse
        fields = "__all__"


class ModuleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Module
        fields = "__all__"
        extra_kwargs = {'nom': {'required': False},
            'description': {'required': False}}


class CoursSerializer(serializers.ModelSerializer):
    module = ModuleSerializer( read_only=True)
    lieuFormation = AdresseSerializer( read_only=True)
    auteur=UserSerializer( read_only=True)
    
    class Meta:
        model = Cours
        fields = "__all__"
