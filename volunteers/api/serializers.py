from rest_framework import serializers
from assist.models import Action, Volunteer, ActionVolunteer, Company, ActionCompany


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

    '''
    class ListActionVolunteerSerializer(serializers.ListSerializer):
    child = ActionVolunteerSerializer()

    
    передавать лист объектов, а не объект
    [
        {
            "volunteer_id": 1, 
            "action_id": 2
        },

                {
            "volunteer_id": 1, 
            "action_id": 1
        }
    ]
    


    def create(self, validated_data):
        return [ActionVolunteer.objects.create(**item) for item in validated_data]
    '''
        

                


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ('id','name','tin','email', 'contact_person', 'site', 'telegram')
        read_only_fields = ('id',) 


class ActionCompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = ActionCompany
        fields = ('action_id','company_id')     


