from flask import Flask, request

app = Flask(__name__)

@app.route('/')
def start():
    print("success")
    return "s"

@app.route('/encrypt', methods = ['POST'])
def encrypt():
    value = request.form['en']

    return value

@app.route('/decrypt', methods = ['POST'])
def decrypt():
    id_ = request.form['id']
    value = request.form['de']

    return id_ + " " + value

if __name__ == "__main__":
    app.run(port=5002)