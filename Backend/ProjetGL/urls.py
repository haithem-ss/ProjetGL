
from django.contrib import admin
from django.urls import path,include
from .views import home
urlpatterns = [
    path('admin/', admin.site.urls),
    path('',home.as_view()),
    path("cours/",include("Cours.urls")),
    path("users/",include("Users.urls"))
]
    