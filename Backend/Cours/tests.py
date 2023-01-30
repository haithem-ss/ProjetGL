from django.test import TestCase
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

import unittest
import tracemalloc
from time import sleep


class CoursTest(unittest.TestCase):
    def setUp(self) -> None:
        tracemalloc.start()
        self.driver = webdriver.Chrome()
        self.driver.get("http://localhost:5173/user/cours/")
        self.driver.implicitly_wait(10)
        self.driver.maximize_window()

    def tearDown(self) -> None:
        try:
            self.driver.quit()
        except:
            pass

    def fill_form(self, niveau, wilaya, commune, adresse, year, title, tarif, tarifPromotion, description, modalite):
        try:
            WebDriverWait(self.driver, 10).until(EC.presence_of_element_located(
                (By.ID, "course_title"))).send_keys(title)
            WebDriverWait(self.driver, 10).until(EC.presence_of_element_located(
                (By.ID, "course_description"))).send_keys(description)
            dropdown = WebDriverWait(self.driver, 10).until(EC.presence_of_element_located(
                (By.ID, "course_field")))
            WebDriverWait(self.driver, 10).until(EC.presence_of_element_located(
                (By.ID, "course_price"))).send_keys(tarif)
            WebDriverWait(self.driver, 10).until(EC.presence_of_element_located(
                (By.ID, "course_price_promotion"))).send_keys(tarifPromotion)
            WebDriverWait(self.driver, 10).until(EC.presence_of_element_located(
                (By.ID, "course_adresse"))).send_keys(adresse)
            WebDriverWait(self.driver, 10).until(EC.presence_of_element_located(
                (By.ID, "course_year"))).send_keys(year)
            dropdownItems = dropdown.find_elements(By.TAG_NAME, "option")
            for item in dropdownItems:
                if item.text == niveau:
                    item.click()
                    break
            wilayaDropdown = WebDriverWait(self.driver, 10).until(EC.presence_of_element_located(
                (By.ID, "course_wilaya")))
            wilayaDropdownItems = wilayaDropdown.find_elements(
                By.TAG_NAME, "option")
            for item in wilayaDropdownItems:
                if item.text == wilaya:
                    item.click()
                    break
            communeDropdown = WebDriverWait(self.driver, 10).until(EC.presence_of_element_located(
                (By.ID, "course_commune")))
            try:
                communeDropdownItems = communeDropdown.find_elements(
                    By.TAG_NAME, "option")
                for item in communeDropdownItems:
                    if item.text == commune:
                        item.click()
                        break
            except:
                print("commune not found")

            modaliteDropdown = WebDriverWait(self.driver, 10).until(EC.presence_of_element_located(
                (By.ID, "course_mode")))
            modaliteDropdownItems = modaliteDropdown.find_elements(
                By.TAG_NAME, "option")
            for item in modaliteDropdownItems:
                if item.text == modalite:
                    item.click()
                    break
            self.driver.implicitly_wait(10)

            btn = WebDriverWait(self.driver, 10).until(EC.presence_of_element_located(
                (By.ID, "btn_submit")))
            for i in range(0, 2):
                btn.click()
                sleep(1)
            sleep(10)
        except:
            print("error")


#     {
#   "id": 41,
#   "date": "2023-01-30",
#   "niveau": "College",
#   "modalité": "Presental",
#   "description": "ahsghhduuejjdjjkdi",
#   "titre": "bilal 3",
#   "tarif": 8889,
#   "tarifPromotion": 2800,
#   "thumnail_url": "C:\\Users\\b_att\\Downloads\\math.jpeg",
#   "lieuFormation": 5,
#   "module": 3,
#   "auteur": 1
# }

    def get_xhr_response(self):
        xhr_list = self.driver.execute_script(
            "return window.XMLHttpRequest.callbacks")
        # Get the last XHR request in the list
        last_xhr = xhr_list[-1]
        # Return the response of the XHR request
        return last_xhr["response"]

    def test_add_cours(self):

        try:

            self.fill_form("Collège", "Adrar", "Adrar", "Adrar", 2023,
                           "test test ", 8889, 2800, "this is a test", "Presental")
            print(self.get_xhr_response())

        except:
            print("error")


if __name__ == "__main__":
    unittest.main()
