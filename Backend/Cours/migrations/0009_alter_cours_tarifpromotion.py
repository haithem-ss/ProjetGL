# Generated by Django 4.1.4 on 2023-01-26 14:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Cours', '0008_alter_cours_modalité'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cours',
            name='tarifPromotion',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]