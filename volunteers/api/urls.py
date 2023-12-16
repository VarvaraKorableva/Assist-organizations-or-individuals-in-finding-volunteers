from django.urls import path, include
from rest_framework import routers
from .views import ActionViewSet, VolunteerViewSet, ActionVolunteerViewSet


app_name = 'api'

router = routers.DefaultRouter()

router.register('actions', ActionViewSet)
router.register('volunteer', VolunteerViewSet)
router.register('actionvolunteeradd', ActionVolunteerViewSet)

urlpatterns = [path('', include(router.urls))]