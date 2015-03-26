from flask import Blueprint
from flask.ext import restful
from flask.ext.login import login_required
from server.serializers.program_serializer import ProgramSerializer
import program_model as model
from server.components import forms
from server.serializers.program_serializer import ProgramSerializer


api_programs = Blueprint('api_programs', __name__)
api_call = restful.Api(api_programs)


class ProgramView(restful.Resource):
    def get(self):
        programs = model.Program.select()
        return ProgramSerializer(programs, many=True).data

    def post(self):
        form = forms.ProgramCreateForm(csrf_enabled=False)
        if not form.validate_on_submit():
            return form.errors, 422

        program = model.Program.new_program(is_active=form.is_active.data, title=form.title.data,
                                            content=form.content.data, picture=form.picture.data,
                                            is_necessary=form.is_necessary.data, required=form.required.data,
                                            viewed=form.viewed.data)
        return ProgramSerializer(program).data, 201


api_call.add_resource(ProgramView, '/api/v1/programs')


