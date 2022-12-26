import statistics
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import FavoriteCours
from .serializer import FavoriteCourseSerializer

# Create your views here.


@api_view(['GET'])
def getFavoriteCours(request):
    favoriteCours = FavoriteCours.objects.all()
    serializer = FavoriteCourseSerializer(favoriteCours, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def postFavoriteCours(request):
    data = {
        'cours': request.data.get('cours'),
        'user': request.data.get('user'),
    }
    favoriteCours = FavoriteCourseSerializer(data=data)
    if favoriteCours.is_valid():
        favoriteCours.save()
        return Response(favoriteCours.data, status=201)
    return Response(favoriteCours.errors, status=400)


@api_view(['DELETE'])
def deleteFavoriteCours(request, pk):
    favoriteCours = FavoriteCours.objects.get(id=pk)
    favoriteCours.delete()
    return Response('Cours deleted')


@api_view(['PUT'])
def updateFavoriteCours(request, pk):
    favoriteCours = FavoriteCours.objects.get(id=pk)
    serializer = FavoriteCourseSerializer(
        instance=favoriteCours, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@ api_view(['POST'])
def clearFavoriteCours(request):
    favoriteCours = FavoriteCours.objects.all()
    favoriteCours.delete()
    return Response('all favorite cours deleted!')
