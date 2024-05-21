from flask import Flask,redirect,url_for,render_template,request
from flask_cors import CORS
import mysql.connector
from datetime import datetime

app=Flask(__name__)
@app.route('/',methods=['GET','POST'])
def home():
    if request.method=='POST':
        # Handle POST Request here
        return render_template('index.html')
    return render_template('index.html')

app = Flask(__name__)
CORS(app)

# MySQL connection configuration
mydb = mysql.connector.connect(
    host="localhost",
    user="hancho6319",
    password="JKX#3aZ441vid",
    database="E-commercePortfolio-Project"
)

@app.route('/')
def index():
    return render_template('home.html')

@app.route('/submit', methods=['POST'])
def submit():
    data = request.json
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

    sql = "INSERT INTO customers (surname, otherName, firstName, email, phone, created_time_date, nationality, state, localGovt, address, password) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
    val = (surname, otherName, firstName, email, phone, created_time_date, nationality, state, localGovt, address, password)
    cursor = mydb.cursor()
    cursor.execute(sql, val)
    mydb.commit()
    cursor.close()

    return f'{firstName} {surname} {otherName} is Successfully Submited'

@app.route('/display')
def display():
    cursor = mydb.cursor()
    cursor.execute("SELECT * FROM customers")
    customers = cursor.fetchall()
    return render_template('display.html', customers=customers)

@app.route('/delete_customer/<int:customer_id>')
def delete_customer(customer_id):
    cursor = mydb.cursor()
    cursor.execute("DELETE FROM customers WHERE id = %s", (customer_id,))
    mydb.commit()
    cursor.close()
    return redirect(url_for('display'))

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")
