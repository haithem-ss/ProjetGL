# Generated by Django 4.1.4 on 2022-12-25 23:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('favoriteCours', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='favoritecours',
            options={},
        ),
        migrations.AlterField(
            model_name='favoritecours',
            name='cours',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='favoritecours',
            name='user',
            field=models.CharField(max_length=200),
        ),
    ]
