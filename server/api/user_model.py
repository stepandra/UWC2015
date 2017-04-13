import datetime

from flask.ext.bcrypt import generate_password_hash
from flask.ext.login import UserMixin

from peewee import *
from . import db


class User(UserMixin, Model):
    username = CharField(unique=True)
    name = CharField()
    phone = CharField(max_length=15)
    address = CharField(default=None)
    email = CharField(unique=True)
    password = CharField(max_length=100)
    joined_at = DateTimeField(default=datetime.datetime.now)
    is_admin = BooleanField(default=False)

    class Meta:
        database = db
        order_by = ('-joined_at',)

    # def get_posts(self):
    #     return Post.select().where(Post.user == self)

    @classmethod
    def create_user(cls, username, name, phone, address, email, password, admin=False):
        try:
            with db.transaction():
                cls.create(
                    username=username,
                    name=name,
                    phone=phone,
                    address=address,
                    email=email,
                    password=generate_password_hash(password),
                    is_admin=admin)
        except IntegrityError:
            raise ValueError("User already exists")


def initialize():
    db.connect()
    db.create_tables([User], safe=True)
    db.close()