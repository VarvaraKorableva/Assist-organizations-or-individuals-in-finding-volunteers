# Generated by Django 4.2.8 on 2023-12-15 16:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Action',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('valid_from', models.DateField()),
                ('valid_till', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='ActionVolunteer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('action_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='action_volunteer', to='assist.action')),
            ],
        ),
        migrations.CreateModel(
            name='Volunteer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=200)),
                ('last_name', models.CharField(max_length=200)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('telegram', models.CharField(blank=True, max_length=200)),
                ('sex', models.CharField(blank=True, choices=[('male', 'Male'), ('female', 'Female'), ('other', 'Other')], max_length=200)),
                ('action', models.ManyToManyField(through='assist.ActionVolunteer', to='assist.action')),
            ],
        ),
        migrations.AddField(
            model_name='actionvolunteer',
            name='volunteer_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='action_volunteer', to='assist.volunteer'),
        ),
    ]
