# Generated by Django 4.2.8 on 2023-12-15 16:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('assist', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ActionCompany',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('action_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='action_company', to='assist.action')),
            ],
        ),
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250)),
                ('tin', models.CharField(max_length=9)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('contact_person', models.CharField(max_length=200)),
                ('site', models.URLField(blank=True)),
                ('telegram', models.CharField(blank=True, max_length=200)),
                ('action', models.ManyToManyField(through='assist.ActionCompany', to='assist.action')),
            ],
        ),
        migrations.AddField(
            model_name='actioncompany',
            name='company_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='action_company', to='assist.company'),
        ),
    ]
