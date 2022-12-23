from django.db import models
from Users.models import User# Create your models here.

# Classe énumérée catégorie
class Catégorie(models.TextChoices):
    PRIMAIRE = 'Primaire'
    COLLEGE = 'College'
    LYCEE = 'Lycée'

# Classe énumérée modalité
class Modalité(models.TextChoices):
    ONLINE = 'Online'
    OFFLINE = 'Offline'

#Pour représenter les cordonnées de google map
class Adresse (models.Model):
    latitiude=models.CharField(max_length=255,null=True)
    longitude=models.CharField(max_length=255,null=True)
    def __str__(self):
        return f"{self.latitiude},{self.longitude}"
class Module(models.Model):
    nom=models.CharField(max_length=50,null=False,unique=True,db_index=True)
    description=models.CharField(max_length=255,null=False)
    def __str__(self):
        return self.nom

class Cours(models.Model):
    date=models.DateField(auto_now_add=True)
    catégorie = models.CharField(max_length=20,choices=Catégorie.choices,null=True)
    modalité = models.CharField(max_length=20,choices=Modalité.choices,null=True)
    description=models.CharField(max_length=255,null=True)
    titre=models.CharField(max_length=100,null=True)
    tarif=models.IntegerField(null=True)
    lieuFormation=models.ForeignKey(Adresse , on_delete=models.PROTECT,null=True)
    module=models.ForeignKey(Module , on_delete=models.PROTECT,null=True)
    thumbnail=models.CharField(max_length=255,null=True)
    auteur=models.ForeignKey(User, on_delete=models.CASCADE,null=True)
    #contact
    def __str__(self):
        return self.titre
class Photo(models.Model):
    url=models.CharField(max_length=255)
    cours=models.ForeignKey(Cours,on_delete=models.CASCADE)
    def __str__(self):
        return self.cours.titre

