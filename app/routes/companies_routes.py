from flask import Blueprint, request, jsonify
from ..controllers.companies_controller import create_company


companies_blueprint = Blueprint('companies', __name__)

@companies_blueprint.route('/add', methods=['POST'])
def add_company_route():
    data = request.json
    if 'company_name' in data and 'contact_email' in data and 'contact_number' in data:
        response = create_company(data)
        return jsonify(response), 201
    else:
        return jsonify({"error": "Missing required company information."}), 400

