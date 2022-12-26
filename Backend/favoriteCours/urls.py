from django.urls import path
from . import views
from django.conf import settings
urlpatterns = [
    path('', views.getFavoriteCours, name="getFavoriteCours"),
    path('post/', views.postFavoriteCours, name="postFavoriteCours"),
    path('delete/<str:pk>/', views.deleteFavoriteCours,
         name="deleteFavoriteCours"),
    path('update/<str:pk>/', views.updateFavoriteCours,
         name="updateFavoriteCours"),
    path('clear/', views.clearFavoriteCours, name="clearFavoriteCours"),

]
