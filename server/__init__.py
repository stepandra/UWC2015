from flask import Flask


app = Flask(__name__)
app._static_folder = "../client/"
app.secret_key = 'auoesh.bouoastuh.45,uoausoehuosth3ououea.auoub!'


import server.views

