from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/user.html')
def profile():
    return render_template("user.html")

@app.route('/index.html')
def backHome():
    return home()
if __name__ == "__main__":
    app.run()
