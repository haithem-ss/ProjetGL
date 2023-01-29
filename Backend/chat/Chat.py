from channels.generic.websocket import WebsocketConsumer
import json
from asgiref.sync import async_to_sync
from .models import ChatMessage, Conversation
from Users.models import User


class ChatConsumer(WebsocketConsumer):
    def connect(self):
        self.group_name = self.scope['url_route']['kwargs']['room_name']
        async_to_sync(self.channel_layer.group_add)(
            self.group_name,
            self.channel_name,
        )

        self.room = Conversation.objects.get_or_create(nom=self.group_name)
        self.accept()

    def disconnect(self, close_code):
        pass

    def receive(self, text_data=None, bytes_data=None):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']
        # sender = User.objects.get(text_data_json['sender'])
        # receiver = text_data_json['receiver']

        # ChatMessage.objects.create(message=message,sender=sender,receiver=receiver)
        async_to_sync(self.channel_layer.group_send)(
            self.group_name,
            {
                'type': 'chat_message',
                'message': message,
            }
        )

    def chat_message(self, e):
        message = e["message"]
        print(message)
        self.send(text_data=json.dumps({
            "type": "chat",
            "message": message
        }))
