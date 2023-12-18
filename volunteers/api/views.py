from django.shortcuts import get_list_or_404
from rest_framework import mixins, viewsets
from assist.models import Action, Volunteer, ActionVolunteer, Company, ActionCompany
from .serializers import ActionSerializer, VolunteerSerializer, CompanySerializer, ActionCompanySerializer, ActionVolunteerSerializer

class ActionViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = Action.objects.all() #django orm select * from action
    serializer_class = ActionSerializer

class VolunteerViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    queryset = Volunteer.objects.all()
    serializer_class = VolunteerSerializer 

class ActionVolunteerViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    queryset = ActionVolunteer.objects.all()
    serializer_class = ActionVolunteerSerializer

    def perform_create(self, serializer):
        serializer.save()
        companies = get_list_or_404(Company, action = serializer.data.get('action_id'))

        mails = [item.email for item in companies]
        telegrams = [item.telegram for item in companies]

        print(mails, telegrams)


class CompanyViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer 


class ActionCompanyViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    queryset = ActionCompany.objects.all()
    serializer_class = ActionCompanySerializer 



'''
    класс который используется для создания другого класса который можно смешать с еще одним классом
    mixins.CreateModelMixin - 'миксин отвечает за метод пост'
    mixins.ListModelMixin - get all list
    viewsets.GenericViewSet - необходим для создания вьюсетов(контроллеров) с помощью миксинов
'''    