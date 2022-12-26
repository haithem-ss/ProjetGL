from rest_framework import serializers
from .models import FavoriteCours


class FavoriteCourseSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        return FavoriteCours.objects.create(**validated_data)

    class Meta:
        model = FavoriteCours
        fields = '__all__'
