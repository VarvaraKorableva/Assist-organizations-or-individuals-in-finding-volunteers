import psycopg2

def create_tables():
    conn = psycopg2.connect(
        dbname='название_вашей_базы_данных',
        user='ваше_имя_пользователя',
        password='ваш_пароль',
        host='адрес_хоста_базы_данных',
        port='порт_базы_данных'
    )

    cur = conn.cursor()

    create_table_query_volunteers = '''
        CREATE TABLE IF NOT EXISTS volunteers (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL,
            age INT
        )
    '''


    cur.execute(create_table_query_volunteers)


    conn.commit()
    cur.close()
    conn.close()