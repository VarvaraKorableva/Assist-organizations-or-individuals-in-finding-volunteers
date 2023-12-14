from ..database.db_connector import create_connection

def add_opportunity(company_id, description, required_skills, available_dates):
    conn = create_connection()
    if conn:
        with conn:
            with conn.cursor() as cursor:
                cursor.execute("""
                    INSERT INTO opportunities (company_id, description, required_skills, available_dates)
                    VALUES (%s, %s, %s, %s);
                """, (company_id, description, required_skills, available_dates))
                conn.commit()
            print("Opportunity added successfully.")
    else:
        print("Failed to connect to the database.")
