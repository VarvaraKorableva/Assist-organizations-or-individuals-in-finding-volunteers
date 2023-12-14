from flask import Blueprint, request, jsonify
from ..controllers.volunteers_controller import create_volunteer

volunteers_blueprint = Blueprint('volunteers', __name__)

@volunteers_blueprint.route('/add', methods=['POST'])
def add_volunteer_route():
    data = request.json
    if all(key in data for key in ['name', 'email', 'contact_number', 'skills', 'availability']):
        response = create_volunteer(data)
        return jsonify(response), 201
    else:
        return jsonify({"error": "Missing required volunteer information."}), 400
