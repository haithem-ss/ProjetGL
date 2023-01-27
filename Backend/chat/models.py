from django.db import models
from Users.models import User
class ChatMessage(models.Model):
    message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    sender = models.ForeignKey(User,null=True,related_name='sender' ,on_delete=models.CASCADE)
    receiver = models.ForeignKey(User,null=True ,related_name='receiver',on_delete=models.CASCADE)
class Conversation(models.Model):
    nom = models.TextField()
    def __str__(self):
        return self.nom
