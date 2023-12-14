from ..models.companies_model import add_company

def create_company(request_data):
    company_name = request_data['company_name']
    contact_email = request_data['contact_email']
    contact_number = request_data['contact_number']
    add_company(company_name, contact_email, contact_number)
    return {"message": "Company added successfully."}

