from flask import Flask
from .routes.companies_routes import companies_blueprint
from .routes.opportunities_routes import opportunities_blueprint
from .routes.volunteers_routes import volunteers_blueprint

def create_app():
    app = Flask(__name__)
    app.register_blueprint(companies_blueprint, url_prefix='/companies')
    app.register_blueprint(opportunities_blueprint, url_prefix='/opportunities')
    app.register_blueprint(volunteers_blueprint, url_prefix='/volunteers')
    return app

