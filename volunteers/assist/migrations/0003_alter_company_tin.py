# Generated by Django 4.2.8 on 2023-12-15 16:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('assist', '0002_actioncompany_company_actioncompany_company_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='company',
            name='tin',
            field=models.CharField(max_length=9, unique=True),
        ),
    ]
