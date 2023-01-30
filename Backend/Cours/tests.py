from django.test import Client
from django.test import TestCase
from .models import Cours


#Test unitaire de route "/cours" qui permet de lister les cours

class CoursListingTestCase(TestCase):
    def setUp(self):
        self.client = Client()
        self.response = self.client.get('/cours')
        print(self.response.status_code)

    def test_if_user_is_created(self):
        self.assertEqual(self.response.status_code, 301)

