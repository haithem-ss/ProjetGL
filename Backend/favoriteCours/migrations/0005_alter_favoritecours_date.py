# Generated by Django 4.1.4 on 2023-01-25 21:15

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('favoriteCours', '0004_favoritecours_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='favoritecours',
            name='date',
            field=models.DateTimeField(auto_created=True, default=datetime.datetime.now),
        ),
    ]
