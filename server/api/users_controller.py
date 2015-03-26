from flask import Blueprint, flash
from flask.ext.login import LoginManager, login_user
from flask.ext.bcrypt import check_password_hash
from flask.ext import restful

from server import app, api_call
from server.components import forms
import user_model as models
from server.serializers.user_serializer import UserSerializer


api_users = Blueprint('api_users', __name__)
api_call = restful.Api(api_users)

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'


@login_manager.user_loader
def load_user(user_id):
    try:
        return models.User.get(models.User.id == user_id)
    except models.DoesNotExist:
        return None


class UserView(restful.Resource):
    def post(self):
        form = forms.RegisterForm(csrf_enabled=False)
        if not form.validate_on_submit():
            return form.errors, 422

        user = models.User.create_user(
            username=form.username.data,
            name=form.name.data,
            phone=form.phone.data,
            address=form.address.data,
            email=form.email.data,
            password=form.password.data
            )
        return UserSerializer(user).data


class SessionView(restful.Resource):
    def post(self):
        form = forms.LoginForm(csrf_enabled=False)
        if not form.validate_on_submit():
            return form.errors, 422

        user = models.User.get(models.User.email == form.email.data)
        if check_password_hash(user.password, form.password.data):
            login_user(user)
            flash("You've been logged in!", "success")
            return UserSerializer(user).data, 201
        else:
            return 'Something, goes wrong', 401


api_call.add_resource(UserView, '/api/v1/users')
api_call.add_resource(SessionView, '/api/v1/sessions')