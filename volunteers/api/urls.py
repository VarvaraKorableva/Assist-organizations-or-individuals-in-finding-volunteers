from django.urls import path, include
from rest_framework import routers
from .views import ActionViewSet, VolunteerViewSet, ActionVolunteerViewSet, CompanyViewSet, ActionCompanyViewSet


app_name = 'api'

router = routers.DefaultRouter()

router.register('actions', ActionViewSet)
router.register('volunteer', VolunteerViewSet)
router.register('addactionvolunteer', ActionVolunteerViewSet)
router.register('company', CompanyViewSet)
router.register('addactioncompany', ActionCompanyViewSet)


urlpatterns = [path('', include(router.urls))]