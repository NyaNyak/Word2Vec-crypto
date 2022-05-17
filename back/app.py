from flask import Flask, request, jsonify, make_response, current_app
from datetime import timedelta
from functools import update_wrapper
from flask_cors import CORS, cross_origin
import data

# https://pyeongho.github.io/flaskcross 

def crossdomain(origin=None, methods=None, headers=None,
                max_age=21600, attach_to_all=True,
                automatic_options=True):
    if methods is not None:
        methods = ', '.join(sorted(x.upper() for x in methods))
    '''if headers is not None and not isinstance(headers, basestring):
        headers = ', '.join(x.upper() for x in headers)
    if not isinstance(origin, basestring):
        origin = ', '.join(origin)'''
    if isinstance(max_age, timedelta):
        max_age = max_age.total_seconds()

    def get_methods():
        if methods is not None:
            return methods

        options_resp = current_app.make_default_options_response()
        return options_resp.headers['allow']

    def decorator(f):
        def wrapped_function(*args, **kwargs):
            if automatic_options and request.method == 'OPTIONS':
                resp = current_app.make_default_options_response()
            else:
                resp = make_response(f(*args, **kwargs))
            if not attach_to_all and request.method != 'OPTIONS':
                return resp

            h = resp.headers

            h['Access-Control-Allow-Origin'] = origin
            h['Access-Control-Allow-Methods'] = get_methods()
            h['Access-Control-Max-Age'] = str(max_age)
            if headers is not None:
                h['Access-Control-Allow-Headers'] = headers
            return resp

        f.provide_automatic_options = False
        return update_wrapper(wrapped_function, f)
    return decorator


database = data.Db()

app = Flask(__name__)
CORS(app, send_wildcard=True, supports_credentials=True)
app.config['CORS_HEADERS'] = 'Content-Type'
app.url_map.strict_slashes = False

@app.route('/')
@crossdomain(origin='*')
def start():
    print("success")
    return "s"

@app.route('/encrypt', methods = ['POST'])
@crossdomain(origin='*')
def encrypt():
    value = request.form['en']

    status, message, id_, string = database.push(value)
    
    data = {
        "status" : status,
        "message" : message,
        "id" : id_,
        "string" : string
    }

    return jsonify(data)

@app.route('/decrypt', methods = ['POST'])
@crossdomain(origin='*')
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
@crossdomain(origin='*')
def config():
    return str(database.config())

if __name__ == "__main__":
    app.run(port=5002)
