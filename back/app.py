from flask import Flask, request, jsonify
import json
from flask_cors import CORS
import data
import os


database = data.Db()

app = Flask(__name__)
CORS(app, supports_credentials=True)

@app.route('/')
def start():
    print("success")
    return "s"

@app.route('/encrypt', methods = ['POST'])
def encrypt():
    temp = json.loads(request.get_data())

    status, message, id_, string = database.push(temp["text"])
    
    data = {
        "status" : status,
        "message" : message,
        "id" : id_,
        "string" : string
    }

    response = jsonify(data)
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
    response.headers.add('Access-Control-Allow-Credentials', 'true')

    return response

@app.route('/decrypt', methods = ['POST'])
def decrypt():
    temp = json.loads(request.get_data())
    id_ = temp["id"]
    string = temp["de"]

    status, message, string = database.pop(id_, string)

    data = {
        "status" : status,
        "message" : message,
        "string" : string,
    }

    response = jsonify(data)
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
    response.headers.add('Access-Control-Allow-Credentials', 'true')

    return response

@app.route('/config')
def config():
    return str(database.config())

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5002))
    app.run(host='0.0.0.0', port=port)
