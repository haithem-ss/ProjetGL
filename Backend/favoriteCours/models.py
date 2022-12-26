from django.db import models
from datetime import datetime

# Create your models here.


class FavoriteCours(models.Model):
    cours = models.ForeignKey('Cours.Cours', on_delete=models.CASCADE)
    user = models.ForeignKey('Users.User', on_delete=models.CASCADE)
    date = models.DateTimeField(auto_created=True, default=datetime.now)

    def __str__(self):
        return f"{self.user.nom} {self.cours.titre}"
