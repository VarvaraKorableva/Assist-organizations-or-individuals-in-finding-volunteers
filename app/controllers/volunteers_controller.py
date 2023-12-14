from ..models.volunteers_model import add_volunteer

def create_volunteer(request_data):
    name = request_data['name']
    email = request_data['email']
    contact_number = request_data['contact_number']
    skills = request_data['skills']
    availability = request_data['availability']
    add_volunteer(name, email, contact_number, skills, availability)
    return {"message": "Volunteer added successfully."}
