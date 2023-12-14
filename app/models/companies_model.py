from ..database.db_connector import create_connection

def add_company(company_name, contact_email, contact_number):
    conn = create_connection()
    if conn:
        with conn.cursor() as cursor:
            try:
                cursor.execute("""
                    INSERT INTO companies (company_name, contact_email, contact_number)
                    VALUES (%s, %s, %s);
                """, (company_name, contact_email, contact_number))
                conn.commit()
                print("Company added successfully.")
            except Exception as e:
                print("Error adding company:", e)
            finally:
                conn.close()
