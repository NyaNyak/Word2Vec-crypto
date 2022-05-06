from flask import Flask, request

app = Flask(__name__)

@app.route('/')
def start():
    print("success")
    return "s"

@app.route('/encrypt', methods = ['POST'])
def encrypt():
    value = request.form['input']

    return value

if __name__ == "__main__":
    app.run(port=5002)