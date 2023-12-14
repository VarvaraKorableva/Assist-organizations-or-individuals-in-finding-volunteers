import psycopg2
import os
from dotenv import load_dotenv

# # Load environment variables from .env file
load_dotenv('/Users/egorchetverikov/Desktop/Assist-organizations-or-individuals-in-finding-volunteers/app/database/.env')

# Establish connection to ElephantSQL
def create_connection():
    try:
        conn = psycopg2.connect(
        dbname = os.getenv('db_name'),
        user = os.getenv('db_user'),
        password = os.getenv('db_password'),
        host = os.getenv('db_host'),
        port = os.getenv('db_port'),
        )
        return conn
    except Exception as e:
        print(f"Database connection error: {e}")
        return None


# # Load environment variables from .env file
# load_dotenv()

# # Get DATABASE_URL from environment variables
# db_url = os.getenv('DATABASE_URL')

# def create_connection():
#     try:
#         conn = psycopg2.connect(db_url)
#         return conn
#     except Exception as e:
#         print(f"Database connection error: {e}")
#         return None