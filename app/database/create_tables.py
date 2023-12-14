from db_connector import create_connection

def create_tables():
    conn = create_connection()
    if conn is not None:
        try:
            cursor = conn.cursor()
            
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS volunteers (
                    id SERIAL PRIMARY KEY,
                    name VARCHAR(255),
                    email VARCHAR(255) UNIQUE,
                    contact_number VARCHAR(255),
                    skills TEXT,
                    availability DATE[]
                );
            """)
            
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS companies (
                    id SERIAL PRIMARY KEY,
                    company_name VARCHAR(255),
                    contact_email VARCHAR(255) UNIQUE,
                    contact_number VARCHAR(255)
                );
            """)
            
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS opportunities (
                    id SERIAL PRIMARY KEY,
                    company_id INTEGER REFERENCES companies(id),
                    description TEXT,
                    required_skills TEXT,
                    available_dates DATE[]
                );
            """)

            conn.commit()
            cursor.close()
            print("Tables created successfully.")
        except Exception as e:
            print("Error creating tables:", e)
        finally:
            conn.close()
    else:
        print("Failed to create database connection.")

if __name__ == "__main__":
    create_tables()
