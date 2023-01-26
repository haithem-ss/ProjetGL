from django.urls import path,include
from .views import ModuleViews,AdresseViews,CoursViews,CoursFilters
urlpatterns = [
    path('modules',ModuleViews.as_view()),
    path('adresses',AdresseViews.as_view()),
    path('',CoursViews.as_view()),
    path(r'Search',CoursFilters.as_view())
]
