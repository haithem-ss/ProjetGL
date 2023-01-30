from rest_framework import serializers
from .models import Adresse, Module, Cours,User
from Users.serializers import UserSerializer


class AdresseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Adresse
        fields = "__all__"


class ModuleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Module
        fields = "__all__"
        extra_kwargs = {'nom': {'required': True},
                        'description': {'required': True}}


class CoursSerializer(serializers.ModelSerializer):
    # module = ModuleSerializer(read_only=True)
    # lieuFormation = AdresseSerializer(read_only=True)
    # auteur = UserSerializer(read_only=True)

    class Meta:
        model = Cours
        fields = "__all__"
    def to_representation(self, instance):
        reps = super().to_representation(instance)
        reps['module'] = ModuleSerializer(Module.objects.get(id=reps["module"]), many=False).data
        reps['auteur'] = UserSerializer(User.objects.get(id=reps["auteur"]), many=False).data
        reps['lieuFormation'] = AdresseSerializer(Adresse.objects.get(id=reps["lieuFormation"]), many=False).data
        return reps