from flask import Flask, request
import random as r
import data

database = data.Db()

app = Flask(__name__)

@app.route('/')
def start():
    print("success")
    return "s"

@app.route('/encrypt', methods = ['POST'])
def encrypt():
    value = request.form['en']

    status, message, id_, string = database.push(value)
    print(database)

    return str(status) + " " + message + " " + str(id_) + " " + string

@app.route('/decrypt', methods = ['POST'])
def decrypt():
    id_ = request.form['id']
    value = request.form['de']

    status, message, string = database.pop(id_, value)

    print(database)

    if status:
        return message
    else:
        return string

@app.route('/config')
def config():
    return str(database.config())

if __name__ == "__main__":
    app.run(port=5002)