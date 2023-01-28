from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import Conversation,ChatMessage
from .serializers import ConversationSerializer,ChatMessageSerializer
from django.shortcuts import get_object_or_404
from django.db.models import Q



class ConversationViews(APIView):

    def get(self, request, *args, **kwargs):
            idUser = self.request.query_params.get('idUser')
            conversations = Conversation.objects.filter(Q(user1_id=idUser) | Q(user2_id=idUser)) 
            serializer = ConversationSerializer(conversations,many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
class ChatMessageViews(APIView):

    def get(self, request, *args, **kwargs):
            conversation_id = self.request.query_params.get('conversation_id')
            print(conversation_id)
            messages = ChatMessage.objects.filter(conversation_id=conversation_id) 
            serializer = ChatMessageSerializer(messages,many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)


