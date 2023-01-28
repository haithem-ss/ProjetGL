from django.db import models
from Users.models import User


class Conversation(models.Model):
    user1 = models.ForeignKey(User,null=True,related_name='user1' ,on_delete=models.CASCADE)
    user2 = models.ForeignKey(User,null=True ,related_name='user2',on_delete=models.CASCADE)
    def __str__(self):
        return f"{self.user1} with {self.user2}"

class ChatMessage(models.Model):
    message = models.TextField()
    dateTimeMessage = models.DateTimeField(auto_now_add=True)
    sender = models.ForeignKey(User,null=True,related_name='sender' ,on_delete=models.CASCADE)
    receiver = models.ForeignKey(User,null=True ,related_name='receiver',on_delete=models.CASCADE)
    conversation=models.ForeignKey(Conversation,null=True,on_delete=models.CASCADE)
    def __str__(self):
        return f"Message N°{self.id}"
