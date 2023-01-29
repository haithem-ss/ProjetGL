from django.db import models
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin


class UserManager(BaseUserManager):
#isavtive probleme
    def create_user(self, email, nom, prenom, password, **other_fields):
        if nom is None:
            raise TypeError("L'utilisateur doit avoir un nom")
        if prenom is None:
            raise TypeError("L'utilisateur doit avoir un prenom")
        if email is None:
            raise TypeError("L'utilisateur doit avoir un email")
        user = self.model(email=email, nom=nom,prenom=prenom, **other_fields)
        user.set_password(password)
        user.is_active= True
        user.save()
        return user
    def create_superuser(self, email, nom, prenom, password,):

        if nom is None:
            raise TypeError("L'administrateur doit avoir un nom")
        if prenom is None:
            raise TypeError("L'administrateur doit avoir un prenom")
        if email is None:
            raise TypeError("L'administrateur doit avoir un email")
        user = self.create_user( email, nom, prenom, password)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(db_index=True, unique=True,  null=False, blank=False)
    nom=models.CharField(max_length=50)
    prenom=models.CharField(max_length=50)
    nomEtablissement = models.CharField(db_index=True,max_length=50, unique=True,  null=True, blank=True)
    dateInscription=models.DateField(auto_now_add=True)
    phoneNumber=models.CharField(max_length=15,null=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['nom','prenom']
    objects = UserManager()
    def __str__(self):
        return f"{self.nom} {self.prenom}"
    def getFullName(self):
        return f"{self.nom} {self.prenom}"