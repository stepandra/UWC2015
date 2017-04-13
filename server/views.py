from flask import (render_template)

from server import app
import server.api.user_model as models
from server.api.users_controller import api_users
from server.api.programs_controller import api_programs
from server.components import forms

app.register_blueprint(api_users)
app.register_blueprint(api_programs)
models.initialize()


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/dashboard')
def dashboard():
    form = forms.DashboardForm()

    return render_template('dashboard.html', form=form)




