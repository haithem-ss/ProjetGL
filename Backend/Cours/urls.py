from django.urls import path,include
from .views import ModuleViews,AdresseViews,CoursViews
urlpatterns = [
    path('modules',ModuleViews.as_view()),
    path('adresses',AdresseViews.as_view()),
    path('',CoursViews.as_view())
]
