from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import Module, Adresse, Cours
from .serializers import ModuleSerializer, AdresseSerializer, CoursSerializer
from django.http import FileResponse, Http404, HttpResponse


from bs4 import BeautifulSoup
import asyncio
import aiohttp
import pandas as pd
import os
import re

# Corse needs admis approval
# what you ll learn from this course
# bio of user
# keywords
from rest_framework import generics
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.parsers import MultiPartParser, FormParser


class ModuleViews(APIView):
    permission_classes = [permissions.AllowAny]
    # Lister toutes les modules

    def get(self, request, *args, **kwargs):
        modules = Module.objects.all()
        serializer = ModuleSerializer(modules, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    # Ajouter un module

    # Path: https://
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

    def put(self, request, *args, **kwargs):
        data = {
            'id': request.data.get('id'),
            'nom': request.data.get('nom'),
            'description': request.data.get('description'),
        }
        module = Module.objects.get(id=data['id'])
        try:
            module.nom, module.description = data['nom'], data['description']
            module.save()
            return Response("Module mise à jour avec succes", status=status.HTTP_202_ACCEPTED)
        except:
            return Response("Module non existant", status=status.HTTP_400_BAD_REQUEST)
    # Supprimer un module

    def delete(self, request, *args, **kwargs):
        id = request.data.get('id')
        try:
            module = Module.objects.get(id=id)
            module.delete()
            return Response("Suppression avec succes", status=status.HTTP_202_ACCEPTED)
        except:
            return Response("Module non existant", status=status.HTTP_404_NOT_FOUND)


class AdresseViews(APIView):
    permission_classes = [permissions.AllowAny]
    # lister les adresses

    def get(self, request, *args, **kwargs):
        adr = Adresse.objects.all()
        serializer = AdresseSerializer(adr, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    # Ajouter un adresse

    def post(self, request, *args, **kwargs):
        data = {
            'latitiude': request.data.get('latitiude'),
            'longitude': request.data.get('longitude'),
            'adresse': request.data.get('adresse'),
            'commune': request.data.get('commune'),
            'wilaya': request.data.get('wilaya'),
        }

        adr = AdresseSerializer(data=data)
        if adr.is_valid():
            adr.save()
            return Response(adr.data, status=status.HTTP_201_CREATED)

        return Response(adr.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, *args, **kwargs):
        data = {
            'id': request.data.get("id"),
            'latitiude': request.data.get('latitiude'),
            'longitude': request.data.get('longitude'),

        }
        adr = Adresse.objects.get(id=data['id'])
        try:
            adr.latitiude, adr.longitude = data['latitiude'], data['longitude']
            adr.save()
            return Response("Adresse mise à jour avec succes", status=status.HTTP_202_ACCEPTED)
        except:

            return Response("Adresse non existant", status=status.HTTP_400_BAD_REQUEST)

    # Supprimer un module
    def delete(self, request, *args, **kwargs):
        id = request.data.get('id')
        try:
            adr = Adresse.objects.get(id=id)
            adr.delete()
            return Response("Suppression avec succes", status=status.HTTP_202_ACCEPTED)
        except:
            return Response("Adresse non existant", status=status.HTTP_404_NOT_FOUND)


class CoursViews(APIView):
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    # lister les cours
    parser_classes = [MultiPartParser, FormParser]

    def get(self, request, *args, **kwargs):
        cours = Cours.objects.all()
        serializer = CoursSerializer(cours, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    # Ajouter un adresse

    def post(self, request, *args, **kwargs):
        data = request.data
        data["auteur_id"] = request.user.id
        cours = CoursSerializer(data=data)
        if cours.is_valid():
            cours.save()
            return Response(cours.data, status=status.HTTP_201_CREATED)
        return Response(cours.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, *args, **kwargs):
        id = request.data.get("id")
        cours = Cours.objects.get(id=id)
        try:
            cours.module_id = request.data['module']
            cours.modalité = request.data['modalité']
            cours.description = request.data['description']
            cours.titre = request.data['titre']
            cours.tarif = request.data['tarif']
            cours.tarifPromotion = request.data['tarifPromotion']
            cours.lieuFormation_id = request.data['lieuFormation']
            cours.niveau = request.data['niveau']
            cours.thumbnail = request.data['thumbnail']
            cours.auteur_id = request.data['auteur']
            cours.save()
            return Response("Cours mise à jour avec succes", status=status.HTTP_202_ACCEPTED)
        except:
            return Response("Cours non existant", status=status.HTTP_400_BAD_REQUEST)
    # Supprimer un cours

    def delete(self, request, *args, **kwargs):
        id = request.data.get('id')
        try:
            cours = Cours.objects.get(id=id)
            cours.delete()
            return Response("Suppression avec succes", status=status.HTTP_202_ACCEPTED)
        except:
            return Response("Cours non existant", status=status.HTTP_404_NOT_FOUND)


def scrape_data(request):

    async def get_page(s, url):
        async with s.get(url) as response:
            return await response.text()

    async def get_all_pages(s, urls):
        tasks = []
        for url in urls:
            task = asyncio.create_task(get_page(s, url))
            tasks.append(task)
        res = await asyncio.gather(*tasks)
        return res

    def get_cours_infos(soup):
        result = []

        cours = soup.select('div > div.text')
        print(len(cours))
        for cour in cours:
            try:
                name = extract_info(
                    cour, 'div.name-rating-row > a')
                status = extract_info(
                    cour, 'div.result-content > a > span.premium-teacher')
                location = extract_info(
                    cour, 'div.name-rating-row > a > span')
                modulesContainer = cour.select('div.result-tags')
                modules = []
                try:
                    for module in modulesContainer:
                        moduleTeached = extract_info(
                            module, f'div.result-tags > span:nth-child({modulesContainer.index(module) + 1})')
                        modules.append(moduleTeached)
                except:
                    print('cant get modules')

                title = extract_info(
                    cour, 'div.title-price-row > div > a > span')

                description = extract_info(
                    cour, 'div.result-content > a > span:nth-child(2)')

                price = extract_info(
                    cour, 'div.title-price-row > div > span > span')
                modules = str(modules).replace('[', '').replace(']', '')
                name = eliminate_special_characters(name)
                name = extract_name_from_text(name)
                modules = eliminate_special_characters(modules)
                result.append({
                    'name': name,
                    'status': status,
                    'modules': modules,
                    'location': location,
                    'title': title,
                    'description': description,
                    'price': price,
                })

            except:
                print('cant get info')
        if (os.path.exists('cours.xlsx')):
            df = pd.read_excel('cours.xlsx')
            df = pd.concat([df, pd.DataFrame(result).drop_duplicates()])
            df.to_excel('cours.xlsx', index=False)
        else:
            df = pd.DataFrame(result).drop_duplicates()
            df.to_excel('cours.xlsx', index=False)

    def eliminate_special_characters(text):
        return re.sub('[^A-Za-z0-9]+', ' ', text)

    def extract_name_from_text(text):
        return text.split(' ')[0]

    def extract_info(soup, element):
        info = soup.select(element)
        if info:
            return info[0].text.strip()
        else:
            return ''

    async def data_scraper():
        urls = range(1, 100)
        urls = [
            f'https://www.apprentus.com/fr/s/Bejaia-Algerie/Soutien-scolaire/36.5574,4.7692/13/25/{url}/' for url in urls]
        async with aiohttp.ClientSession() as s:
            htmls = await get_all_pages(s, urls)
            for html in htmls:
                print(f'scrapping page {htmls.index(html) + 1}')
                soup = BeautifulSoup(html, 'html5lib')
                get_cours_infos(soup)

    asyncio.run(data_scraper())
    return Response("Scraping done", status=status.HTTP_200_OK)


def download_scraped_data(request):
    response = HttpResponse()
    response["Access-Control-Allow-Origin"] = "http://localhost:5173"
    response["Access-Control-Allow-Methods"] = "GET, OPTIONS"
    response["Access-Control-Max-Age"] = "1000"
    response["Access-Control-Allow-Headers"] = "*"

    path = 'cours.xlsx'
    if os.path.exists(path):
        with open(path, 'rb') as fh:
            response = HttpResponse(
                fh.read(), content_type="application/vnd.ms-excel")
            response['Content-Disposition'] = 'inline; filename=' + \
                os.path.basename(path)
            return response
    raise Http404


class CoursFilters(generics.ListCreateAPIView):
    queryset = Cours.objects.all()
    serializer_class = CoursSerializer
    name = 'Cours list'
    filter_backends = [filters.SearchFilter,
                       DjangoFilterBackend, filters.OrderingFilter]

    filterset_fields = (
        'modalité',
        'niveau',
    )
    search_fields = ["auteur__nom", "^titre", "description"]
    ordering_fields = ['date']
