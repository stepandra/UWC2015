from flask import Flask, g
from flask.ext import restful
from flask.ext.login import current_user
import server.api.user_model as models
from peewee import *

db = SqliteDatabase('database.db')

app = Flask(__name__, template_folder='../client/')
app._static_folder = "../client/"
app.secret_key = 'auoesh.bouoastuh.45,uoausoehuosth3ououea.auoub!'


api_call = restful.Api(app)

@app.before_request
def before_request():
    g.db = models.db
    g.db.connect()
    g.user = current_user


@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    return response

import server.views

