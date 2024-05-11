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
    data = request.json()
    surname = data.get('surname')
    otherName = data.get('otherName')
    firstName = data.get('firstName')
    email = data.get('email')
    phone = data.get('phone')
    created_time_date = datetime.now()
    nationality = data.get('nationality')
    state = data.get('state')
    localGovt = data.get('localGovt')
    address = data.get('address')
    password = data.get('password')

    cursor = mydb.cursor()
    sql = "INSERT INTO customers (surname, otherName, firstName, email, phone, created_time_date, nationality, state, localGovt, address, password) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
    val = (surname, otherName, firstName, email, phone, created_time_date, nationality, state, localGovt, address, password)
    cursor.execute(sql, val)
    mydb.commit()
    cursor.close()

    return f'{firstName} {surname} {otherName} is Successfully Submited'

@app.route('/delete/<int:id>')
def delete(id):
    cursor = mydb.cursor()
    cursor.execute("DELETE FROM customers WHERE id = %s", (id,))
    mydb.commit()
    cursor.close()
    return redirect(url_for('form'))

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")

