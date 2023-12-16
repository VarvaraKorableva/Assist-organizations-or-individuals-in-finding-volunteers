from rest_framework import serializers
from assist.models import Action, Volunteer, ActionVolunteer, ActionCompany


class ActionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Action
        fields = ('id', 'name', 'description', 'valid_from', 'valid_till')
        read_only_fields = ('id',)


class VolunteerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Volunteer
        fields = ('id', 'first_name', 'last_name', 'email', 'telegram', 'sex')
        read_only_fields = ('id',)    


class ActionVolunteerSerializer(serializers.ModelSerializer):
    class Meta:
        model = ActionVolunteer
        fields = ('volunteer_id', 'action_id')
        read_only_fields = ('id',)   


'''
class ActionCompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = ActionCompany
        fields = ('id')
        read_only_fields = ('id',)                   
'''
