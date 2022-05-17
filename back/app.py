from flask import Flask, request, jsonify, make_response, current_app
from flask_cors import CORS
import data


database = data.Db()

app = Flask(__name__)
CORS(app, supports_credentials=True)

@app.route('/')
def start():
    print("success")
    return "s"

@app.route('/encrypt', methods = ['POST'])
def encrypt():
    value = request.form['en']

    status, message, id_, string = database.push(value)
    
    data = {
        "status" : status,
        "message" : message,
        "id" : id_,
        "string" : string
    }
    res = jsonify(data)
    res.headers.add('Access-Control-Allow-Origin', '*')

    return res

@app.route('/decrypt', methods = ['POST'])
def decrypt():
    id_ = request.form['id']
    value = request.form['de']

    status, message, string = database.pop(id_, value)

    data = {
        "status" : status,
        "message" : message,
        "string" : string,
    }

    return jsonify(data)

@app.route('/config')
def config():
    return str(database.config())

if __name__ == "__main__":
    app.run(port=5002)
