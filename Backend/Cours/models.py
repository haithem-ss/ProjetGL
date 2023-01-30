from django.db import models
from Users.models import User  # Create your models here.

# Classe énumérée catégorie


class Catégorie(models.TextChoices):
    PRIMAIRE = 'Primaire'
    COLLEGE = 'College'
    LYCEE = 'Lycée'
    UNIVERSITE = "Université"
    AUTRE = "Autre"

# Classe énumérée modalité


class Modalité(models.TextChoices):
    ONLINE = 'Online'
    PRESENTAL = 'Presental'

# Pour représenter les cordonnées de google map


class Adresse (models.Model):
    latitiude = models.CharField(max_length=255, null=True)
    longitude = models.CharField(max_length=255, null=True)
    adresse = models.CharField(max_length=255, null=True)
    commune = models.CharField(max_length=255, null=True)
    wilaya = models.CharField(max_length=255, null=True)

    def __str__(self):
        return f"{self.latitiude},{self.longitude}"


def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)


class Module(models.Model):
    nom = models.CharField(max_length=255, null=False)
    description = models.CharField(max_length=255, null=False)
    image_url = models.ImageField(upload_to=upload_to, blank=True, null=True)

    def __str__(self):
        return self.nom


class Cours(models.Model):
    date = models.DateField(auto_now_add=True)
    niveau = models.CharField(
        max_length=20, choices=Catégorie.choices, null=True)
    modalité = models.CharField(
        max_length=20, choices=Modalité.choices, null=True)
    description = models.CharField(max_length=255, null=True)
    titre = models.CharField(max_length=100, null=True)
    tarif = models.IntegerField(null=True)
    tarifPromotion = models.IntegerField(null=True, blank=True)
    lieuFormation = models.ForeignKey(
        Adresse, on_delete=models.PROTECT, null=True)
    module = models.ForeignKey(Module, on_delete=models.PROTECT, null=True)
    thumnail_url = models.CharField(max_length=255, null=True, blank=True)
    auteur = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    # contact

    def __str__(self):
        return f"{self.titre}"


class Photo(models.Model):
    url = models.CharField(max_length=255)
    cours = models.ForeignKey(Cours, on_delete=models.CASCADE)

    def __str__(self):
        return self.cours.titre
