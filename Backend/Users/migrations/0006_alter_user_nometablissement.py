# Generated by Django 4.1.5 on 2023-01-29 20:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Users', '0005_user_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='nomEtablissement',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
