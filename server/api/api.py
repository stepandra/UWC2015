from flask import Blueprint
from flask import abort, jsonify, json
import os

api_program = Blueprint('api_program', __name__)

SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
json_url = os.path.join(SITE_ROOT, "json", "program.json")
data = json.load(open(json_url))
@api_program.route('/api/program', methods=['GET'])
@api_program.route('/api/program/<string:id>', methods=['GET'])
def program_param(id=None):
    if id:
        task = [task for task in data if task['_id'] == id]
        if len(task) == 0:
            abort(404)
        return jsonify({'program': task[0]})
    else:
        return jsonify({'programs': data})