from django.urls import path, include
from .views import ModuleViews, AdresseViews, CoursViews, scrape_data, download_scraped_data

urlpatterns = [
    path('modules', ModuleViews.as_view()),
    path('adresses', AdresseViews.as_view()),
    path('', CoursViews.as_view()),
    path('scraper/', scrape_data),
    path('download/', download_scraped_data, name='download'),
]
