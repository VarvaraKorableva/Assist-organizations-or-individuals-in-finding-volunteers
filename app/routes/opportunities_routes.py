from flask import Blueprint, request, jsonify
from ..controllers.opportunities_controller import create_opportunity

opportunities_blueprint = Blueprint('opportunities', __name__)

@opportunities_blueprint.route('/add', methods=['POST'])
def add_opportunity_route():
    data = request.json
    if all(key in data for key in ['company_id', 'description', 'required_skills', 'available_dates']):
        response = create_opportunity(data)
        return jsonify(response), 201
    else:
        return jsonify({"error": "Missing required opportunity information."}), 400
