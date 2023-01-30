from rest_framework import serializers
from .models import ChatMessage,Conversation
from Users.serializers import UserSerializer
from .models import User

class ConversationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Conversation
        fields = "__all__"
    def to_representation(self, instance):
        reps = super().to_representation(instance)
        reps['user1'] = UserSerializer(User.objects.get(id=reps["user1"]), many=False).data
        reps['user2'] = UserSerializer(User.objects.get(id=reps["user2"]), many=False).data
        return reps

class ChatMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatMessage
        fields = "__all__"
