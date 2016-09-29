import json
import os
from flask import Flask, render_template, request, redirect, url_for, abort, Response

app = Flask(__name__)

@app.route("/", methods=['GET', 'POST'])
def index():
	return render_template('index.html')

@app.errorhandler(404)
def page_not_found(e):
	return render_template('404.html'), 404

if __name__ == "__main__":
    app.run(debug=True) # local running on port 5000
    #app.run(host='0.0.0.0', port=8080, debug=False)
