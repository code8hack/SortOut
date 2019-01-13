from flask import Flask, render_template, request, url_for, session
from werkzeug.utils import redirect

from Objects.users import ServiceReciever, ServiceProvider, User

app = Flask(__name__)

service_getters = list()
jobs = list()
@app.route("/")
def home():
    return render_template("start.html")

@app.route('/success', methods=['POST', 'GET'])
def success():
    if request.method == 'POST':
        job = request.form['job']
        description = request.form['des']
        price = request.form['price']
        jobs.append((job, description, price))
    return render_template("List/index.html", data=jobs)

@app.route('/ads')
def ads():

    return render_template("ads.html")

@app.route('/login', methods=['POST', 'GET'])
def login():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        password = request.form['password']
        account = request.form['account']

        user = User(name=name, email=email, password=password)
        session['email'] = email
        if account == "service getter":
            return redirect(url_for('ads'))
        else:
            return redirect(url_for('success'))
    else:
        email = request.args.get('email')
        return redirect(url_for('success'))


if __name__ == "__main__":
    app.secret_key = 'SECRET KEY'
    app.run(debug=True)
