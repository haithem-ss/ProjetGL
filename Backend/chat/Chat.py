from channels.generic.websocket import WebsocketConsumer
import json
from asgiref.sync import async_to_sync
from .models import ChatMessage, Conversation
from Users.models import User


class ChatConsumer(WebsocketConsumer):
    def connect(self):
        self.group_id = self.scope['url_route']['kwargs']['group_id']
        async_to_sync(self.channel_layer.group_add)(
            self.group_id,
            self.channel_name,
        )
        self.conversation = Conversation.objects.get_or_create(id=self.group_id)[
            0]
        self.accept()

    def disconnect(self, close_code):
        pass

    def receive(self, text_data=None, bytes_data=None):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']
        sender = User.objects.get(id=text_data_json['sender'])
        receiver = User.objects.get(id=text_data_json['receiver'])
        print(self.conversation)
        ChatMessage.objects.create(
            message=message,
            sender=sender,
            receiver=receiver,
            conversation=self.conversation
        )
        async_to_sync(self.channel_layer.group_send)(
            self.group_id,
            {
                'type': 'chat_message',
                'sender': sender.id,
                'receiver': receiver.id,
                'message': message,
            }
        )

    def chat_message(self, e):
        message = e["message"]
        self.send(text_data=json.dumps({
            "type": "chat",
            'sender': e["sender"],
            'receiver':  e["receiver"],
            "message": message
        }))
