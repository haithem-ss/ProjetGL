from django.test import TestCase
from .models import User


#Test unitaire de la création d'un utilisateur
class UserCreationTestCase(TestCase):
    def setUp(self):
        User.objects.create(email="email1@estin.dz", nom="nom1",prenom="prenom1",password="motDePasse1")
        User.objects.create(email="email2@estin.dz", nom="nom2",prenom="prenom2",password="motDePasse2")

    def test_if_user_is_created(self):
        personne1 = User.objects.get(email="email1@estin.dz")
        personne2 = User.objects.get(email="email2@estin.dz")
        self.assertEqual(personne1.getFullName(), f"{personne1.nom} {personne1.prenom}")
        self.assertEqual(personne2.getFullName(), f"{personne2.nom} {personne2.prenom}")
#Test unitaire de la modification d'une information d'un utilisateur

class UserModifyTestCase(TestCase):
    def setUp(self):
        self.user=User.objects.create(email="email1@estin.dz", nom="nom1",prenom="prenom1",password="motDePasse1")
        self.user.nom="SAIDA"
        self.user.save()
    def test_if_user_is_created(self):
        user = User.objects.get(email="email1@estin.dz")
        self.assertEqual(user.nom, "SAIDA")
        self.assertEqual(user.email, "email1@estin.dz")
        self.assertEqual(user.prenom, "prenom1")