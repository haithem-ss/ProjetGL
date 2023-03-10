from django.urls import path, include
from .views import ModuleViews, AdresseViews, CoursViews, scrape_data, download_scraped_data
from django.urls import path, include
from .views import ModuleViews, CoursAuteurViews,AdresseViews, CoursViews, CoursFilters, CoursUploader

urlpatterns = [
    path('modules', ModuleViews.as_view()),
    path('adresses', AdresseViews.as_view()),
    path('', CoursViews.as_view()),
    path('auteur', CoursAuteurViews.as_view()),
    path('scraper/', scrape_data),
    path('download/', download_scraped_data, name='download'),
    path('upload/', CoursUploader.as_view()),
    path(r'Search', CoursFilters.as_view())
]
