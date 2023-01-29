from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from django.contrib import admin
from django.urls import path, include
from .views import UserRegistration, Upload
urlpatterns = [
    path('register', UserRegistration.as_view(), name='registration_view'),
    path('login', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('edit', UserRegistration.as_view(), name='edit_view'),
    path('get/', UserRegistration.as_view(), name='get_view'),
    path('upload/', Upload.as_view(), name='upload_view'),
]
