# Generated by Django 4.1.4 on 2023-01-26 19:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Cours', '0009_alter_cours_tarifpromotion'),
    ]

    operations = [
        migrations.RenameField(
            model_name='cours',
            old_name='catégorie',
            new_name='niveau',
        ),
    ]
