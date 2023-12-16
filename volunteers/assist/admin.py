from django.contrib import admin
from .models import Action, Volunteer, ActionVolunteer, Company, ActionCompany

class ActionVolunteerInline(admin.TabularInline):
    model = ActionVolunteer
    raw_id_field = ['action_id']


@admin.register(Volunteer)
class VolunteerAdmin(admin.ModelAdmin):
    list_filter = ('sex','action')
    list_display = ('first_name', 'last_name', 'email', 'sex')
    search_fields = ('last_name', 'email')
    inlines = [ActionVolunteerInline]


class ActionCompanyInline(admin.TabularInline):
    model = ActionCompany
    raw_id_field = ['action_id']


@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_filter = ('name',)
    list_display = ('name', 'tin', 'email', 'contact_person')
    search_fields = ('name', 'tin', 'email')
    inlines = [ActionCompanyInline]    


admin.site.register(Action)

