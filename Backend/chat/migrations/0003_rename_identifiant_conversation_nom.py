# Generated by Django 4.1.4 on 2023-01-26 10:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0002_conversation_chatmessage_receiver_chatmessage_sender'),
    ]

    operations = [
        migrations.RenameField(
            model_name='conversation',
            old_name='identifiant',
            new_name='nom',
        ),
    ]
