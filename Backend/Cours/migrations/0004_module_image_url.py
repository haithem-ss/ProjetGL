# Generated by Django 4.1.4 on 2023-01-25 23:13

import Cours.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Cours', '0003_alter_cours_auteur'),
    ]

    operations = [
        migrations.AddField(
            model_name='module',
            name='image_url',
            field=models.ImageField(blank=True, null=True, upload_to=Cours.models.upload_to),
        ),
    ]
