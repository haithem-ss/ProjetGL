from rest_framework import serializers
from .models import ChatMessage,Conversation
from Users.serializers import UserSerializer

class ConversationSerializer(serializers.ModelSerializer):
    user1=UserSerializer( read_only=True)
    user2=UserSerializer( read_only=True)
    class Meta:
        model = Conversation
        fields = "__all__"


class ChatMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatMessage
        fields = "__all__"
