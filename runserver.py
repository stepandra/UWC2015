from server import app


DEBUG = True
PORT = 8000
HOST = '0.0.0.0'

app.run(debug=DEBUG, host=HOST, port=PORT)