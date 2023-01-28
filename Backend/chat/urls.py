from django.urls import path
from .views import ConversationViews,ChatMessageViews
urlpatterns = [
    path('conversations/', ConversationViews.as_view()),
    path('messages/', ChatMessageViews.as_view()),
]
