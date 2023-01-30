from rest_framework import serializers
from .models import FavoriteCours
from Cours.models import Cours
from Cours.serializers import CoursSerializer


class FavoriteCourseSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        return FavoriteCours.objects.create(**validated_data)

    class Meta:
        model = FavoriteCours
        fields = '__all__'
    def to_representation(self, instance):
        reps = super().to_representation(instance)
        reps = CoursSerializer(Cours.objects.get(id=reps["cours"]), many=False).data
        return reps
