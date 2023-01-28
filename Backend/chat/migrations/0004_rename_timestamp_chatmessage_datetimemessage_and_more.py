# Generated by Django 4.1.4 on 2023-01-27 13:52

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('chat', '0003_rename_identifiant_conversation_nom'),
    ]

    operations = [
        migrations.RenameField(
            model_name='chatmessage',
            old_name='timestamp',
            new_name='dateTimeMessage',
        ),
        migrations.RemoveField(
            model_name='conversation',
            name='nom',
        ),
        migrations.AddField(
            model_name='conversation',
            name='user1',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='user1', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='conversation',
            name='user2',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='user2', to=settings.AUTH_USER_MODEL),
        ),
    ]
