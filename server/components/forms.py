from flask_wtf import Form
from wtforms import StringField, PasswordField, TextAreaField, IntegerField, BooleanField, DateField, DateTimeField
from wtforms.validators import (DataRequired, Regexp, ValidationError, Email,
                               Length, EqualTo)
from wtfpeewee.orm import model_form


from server.api.user_model import User
from server.api.program_model import Program, Contacts
ProgramCreateForm = model_form(Program, Form)
ContactsCreateForm = model_form(Contacts, Form)


def name_exists(form, field):
    if User.select().where(User.username == field.data).exists():
        raise ValidationError('User with that name already exists.')


def email_exists(form, field):
    if User.select().where(User.email == field.data).exists():
        raise ValidationError('User with that email already exists.')


class RegisterForm(Form):
    username = StringField(
        'Username',
        validators=[
            DataRequired(),
            Regexp(
                r'^[a-zA-Z0-9_]+$',
                message=("Username should be one word, letters, "
                         "numbers, and underscores only.")
            ),
            name_exists
        ])
    name = StringField('Name', validators=[DataRequired()])
    phone = StringField('Phone number', validators=[DataRequired()])
    address = StringField('Address')
    email = StringField(
        'Email',
        validators=[
            DataRequired(),
            Email(),
            email_exists
        ])
    password = PasswordField(
        'Password',
        validators=[
            DataRequired(),
            Length(min=2),
            EqualTo('password2', message='Passwords must match')
        ])
    password2 = PasswordField(
        'Confirm Password',
        validators=[DataRequired()]
    )


class LoginForm(Form):
    email = StringField('Email', validators=[DataRequired(), Email()])
    password = PasswordField('Password', validators=[DataRequired()])
    
    
class DashboardForm(Form):
    content = TextAreaField("What's up?", validators=[DataRequired()])




