from django.db import models

SEX = (('male','Male'), ('female','Female'),('other','Other'))

class Action(models.Model):
    name = models.CharField(blank=False, max_length=200) 
    description = models.TextField(blank=False) 
    valid_from = models.DateField(blank=False)
    valid_till = models.DateField(blank=False)
    def __str__(self) -> str:
        return self.name


class Volunteer(models.Model):
    first_name = models.CharField(blank=False, max_length=200)
    last_name = models.CharField(blank=False, max_length=200)
    email = models.EmailField(blank=False, unique=True)
    telegram = models.CharField(blank=True, max_length=200)
    sex = models.CharField(blank=True, max_length=200, choices=SEX)
    action = models.ManyToManyField(Action, through='ActionVolunteer', blank=False)  

    def __str__(self) -> str:
        return f'{self.first_name} {self.last_name}'


class ActionVolunteer(models.Model):
    action_id = models.ForeignKey(Action, on_delete=models.CASCADE, related_name='action_volunteer')
    volunteer_id = models.ForeignKey(Volunteer, on_delete=models.CASCADE, related_name='action_volunteer')


class Company(models.Model):
    name = models.CharField(blank=False, max_length=250)
    tin = models.CharField(blank=False, max_length=9, unique=True)
    email = models.EmailField(blank=False, unique=True)
    contact_person = models.CharField(blank=False, max_length=200)
    site = models.URLField(blank=True)
    telegram = models.CharField(blank=True, max_length=200)
    action = models.ManyToManyField(Action, through='ActionCompany', blank=False)  

    def __str__(self) -> str:
        return self.name


class ActionCompany(models.Model):
    action_id = models.ForeignKey(Action, on_delete=models.CASCADE, related_name='action_company')
    company_id = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='action_company')
