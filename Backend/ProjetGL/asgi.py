from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from django.urls import path
from chat.Chat import ChatConsumer

application = ProtocolTypeRouter({
    'http': get_asgi_application(),
    'websocket': URLRouter(
        [
            path(r'chat/<str:room_name>/', ChatConsumer.as_asgi()),
        ]
    ),
})