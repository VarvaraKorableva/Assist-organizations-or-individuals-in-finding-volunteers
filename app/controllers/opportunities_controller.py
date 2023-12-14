from ..models.opportunities_model import add_opportunity

def create_opportunity(request_data):
    company_id = request_data['company_id']
    description = request_data['description']
    required_skills = request_data['required_skills']
    available_dates = request_data['available_dates']
    add_opportunity(company_id, description, required_skills, available_dates)
    return {"message": "Opportunity added successfully."}
