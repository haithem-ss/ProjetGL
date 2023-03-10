from rest_framework_simplejwt.views import (
    TokenRefreshView,
)
from .views import MyTokenObtainPairView
from django.contrib import admin
from django.urls import path, include
from .views import UserRegistration, Upload, UserViews
urlpatterns = [
    path('register', UserRegistration.as_view(), name='registration_view'),
    path('login', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('edit', UserRegistration.as_view(), name='edit_view'),
    path('get/', UserRegistration.as_view(), name='get_view'),
    path('upload/', Upload.as_view(), name='upload_view'),
    path('', UserViews.as_view()),
]
