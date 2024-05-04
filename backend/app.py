from flask import Flask, render_template, request
import mysql.connector
from datetime import datetime

app = Flask(__name__)

# MySQL connection configuration
mydb = mysql.connector.connect(
    host="localhost",
    user="hancho6319",
    password="JKX#3aZ441vid",
    database="E-commercePortfolio-Project"
)

@app.route('/')
def index():
    return render_template('form.html')

@app.route('/submit', methods=['POST'])
def submit():
    surname = request.form['surname']
    other_name = request.form['other_name']
    last_name = request.form['last_name']
    email = request.form['email']
    phone_number = request.form['phone_number']
    created_time_date = datetime.now()
    product_id = request.form['product_id']
    nationality = request.form['nationality']
    state_province = request.form['state_province']
    address = request.form['address']

    cursor = mydb.cursor()
    sql = "INSERT INTO customers (surname, other_name, last_name, email, phone_number, created_time_date, product_id, nationality, state_province, address) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
    val = (surname, other_name, last_name, email, phone_number, created_time_date, product_id, nationality, state_province, address)
    cursor.execute(sql, val)
    mydb.commit(s)
    cursor.close()

    return 'Data successfully submitted to MySQL'

@app.route('/delete/<int:id>')
def delete(id):
    cursor = mydb.cursor()
    cursor.execute("DELETE FROM customers WHERE id = %s", (id,))
    mydb.commit()
    cursor.close()
    return redirect(url_for('form'))

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=81)

