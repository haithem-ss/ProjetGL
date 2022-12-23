from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import Module,Adresse,Cours
from .serializers import ModuleSerializer, AdresseSerializer, CoursSerializer
//Corse needs admis approval
//what you ll learn from this course
//bio of user
//keywords
class ModuleViews(APIView):
    # permission_classes = [permissions.IsAuthenticated]
    # Lister toutes les modules
    def get(self, request, *args, **kwargs):
        modules = Module.objects.all()
        serializer = ModuleSerializer(modules, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    # Ajouter un module
    def post(self, request, *args, **kwargs):
        data = {
            'nom': request.data.get('nom'), 
            'description': request.data.get('description'), 
        }
        module = ModuleSerializer(data=data)
        if module.is_valid():
            module.save()
            return Response(module.data, status=status.HTTP_201_CREATED)

        return Response(module.errors, status=status.HTTP_400_BAD_REQUEST)
    def put(self,request, *args,**kwargs):
        data = {
            'id':request.data.get('id'),
            'nom': request.data.get('nom'), 
            'description': request.data.get('description'), 
        }
        module = Module.objects.get(id=data['id'])
        try:
            module.nom,module.description=data['nom'],data['description']
            module.save()
            return Response("Module mise à jour avec succes", status=status.HTTP_202_ACCEPTED)
        except:
            return Response("Module non existant", status=status.HTTP_400_BAD_REQUEST)
    #Supprimer un module    
    def delete(self, request, *args, **kwargs):
        id=request.data.get('id') 
        try:
            module=Module.objects.get(id=id)
            module.delete()
            return Response("Suppression avec succes", status=status.HTTP_202_ACCEPTED)
        except:
            return Response("Module non existant", status=status.HTTP_404_NOT_FOUND)

class AdresseViews(APIView):
    # permission_classes = [permissions.IsAuthenticated]
    #lister les adresses
    def get(self, request, *args, **kwargs):
        adr = Adresse.objects.all()
        serializer = AdresseSerializer(adr, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    # Ajouter un adresse
    def post(self, request, *args, **kwargs):
        data = {
            'latitiude': request.data.get('latitiude'), 
            'longitude': request.data.get('longitude'), 
        }
        adr = AdresseSerializer(data=data)
        if adr.is_valid():
            adr.save()
            return Response(adr.data, status=status.HTTP_201_CREATED)

        return Response(adr.errors, status=status.HTTP_400_BAD_REQUEST)
    def put(self,request, *args,**kwargs):
        data = {
            'id':request.data.get("id"),    
            'latitiude': request.data.get('latitiude'), 
            'longitude': request.data.get('longitude'), 
        }
        adr = Adresse.objects.get(id=data['id'])
        try:
            adr.latitiude,adr.longitude=data['latitiude'],data['longitude']
            adr.save()
            return Response("Adresse mise à jour avec succes", status=status.HTTP_202_ACCEPTED)
        except:
            
            return Response("Adresse non existant", status=status.HTTP_400_BAD_REQUEST)
            
    #Supprimer un module    
    def delete(self, request, *args, **kwargs):
        id=request.data.get('id') 
        try:
            adr=Adresse.objects.get(id=id)
            adr.delete()
            return Response("Suppression avec succes", status=status.HTTP_202_ACCEPTED)
        except:
            return Response("Adresse non existant", status=status.HTTP_404_NOT_FOUND)

class CoursViews(APIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    #lister les cours
    def get(self, request, *args, **kwargs):
        cours = Cours.objects.all()
        serializer = CoursSerializer(cours, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    # Ajouter un adresse
    def post(self, request, *args, **kwargs):
        data=request.data.dict()
        data["auteur"]=request.user.id
        print(data)
        cours = CoursSerializer(data=data)
        if cours.is_valid():
            cours.save()
            return Response(cours.data, status=status.HTTP_201_CREATED)
        return Response(cours.errors, status=status.HTTP_400_BAD_REQUEST)
    def put(self,request, *args,**kwargs):
        cours = Cours.objects.get(id=request.data['id'])
        try:
            cours.save()
            return Response("Adresse mise à jour avec succes", status=status.HTTP_202_ACCEPTED)
        except:
            
            return Response("Adresse non existant", status=status.HTTP_400_BAD_REQUEST)
    #Supprimer un cours    
    def delete(self, request, *args, **kwargs):
        id=request.data.get('id') 
        try:
            cours=Cours.objects.get(id=id)
            cours.delete()
            return Response("Suppression avec succes", status=status.HTTP_202_ACCEPTED)
        except:
            return Response("Cours non existant", status=status.HTTP_404_NOT_FOUND)
