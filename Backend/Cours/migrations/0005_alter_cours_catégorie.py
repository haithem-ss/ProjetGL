# Generated by Django 4.1.4 on 2023-01-26 14:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Cours', '0004_module_image_url'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cours',
            name='catégorie',
            field=models.CharField(choices=[('Primaire', 'Primaire'), ('College', 'College'), ('Lycée', 'Lycee'), ('Université', 'Universite'), ('Autre', 'Autre')], max_length=20, null=True),
        ),
    ]
