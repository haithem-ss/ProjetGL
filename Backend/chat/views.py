from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import Conversation,ChatMessage
from .serializers import ConversationSerializer,ChatMessageSerializer
from django.shortcuts import get_object_or_404
from django.db.models import Q
from .models import Conversation



class ConversationViews(APIView):

    def get(self, request, *args, **kwargs):
            idUser = self.request.query_params.get('idUser')
            conversations = Conversation.objects.filter(Q(user1_id=idUser) | Q(user2_id=idUser)) 
            serializer = ConversationSerializer(conversations,many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        if Conversation.objects.filter(user1= request.data['user1'],user2=request.data["user2"]).exists() | Conversation.objects.filter(user1= request.data['user2'],user2=request.data["user1"]).exists() :
            return Response({"message":"Conversation already exists"}, status=status.HTTP_200_OK)
        conversation = ConversationSerializer(data=request.data)
        if conversation.is_valid():
            conversation.save()
            return Response(conversation.data, status=status.HTTP_201_CREATED)
        return Response(conversation.errors, status=status.HTTP_400_BAD_REQUEST)

class ChatMessageViews(APIView):

    def get(self, request, *args, **kwargs):
            conversation_id = self.request.query_params.get('conversation_id')
            print(conversation_id)
            messages = ChatMessage.objects.filter(conversation_id=conversation_id) 
            serializer = ChatMessageSerializer(messages,many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)


