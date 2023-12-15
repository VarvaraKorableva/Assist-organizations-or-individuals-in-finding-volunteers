from rest_framework import mixins, viewsets
from assist.models import Action, Volunteer, ActionVolunteer
from .serializers import ActionSerializer, VolunteerSerializer, ActionVolunteerSerializer

class ActionViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, viewsets.GenericViewSet):
    '''
    mixins.CreateModelMixin - 'миксин отвечает за метод пост'
    mixins.ListModelMixin - get all list
    viewsets.GenericViewSet - необходим для создания вьюсетов(контроллеров) с помощью миксинов
    '''
    queryset = Action.objects.all() #django orm select * from action
    serializer_class = ActionSerializer

class VolunteerViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = Volunteer.objects.all()
    serializer_class = VolunteerSerializer 

class ActionVolunteerViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = ActionVolunteer.objects.all()
    serializer_class = ActionVolunteerSerializer

    
