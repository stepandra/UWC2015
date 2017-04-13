import datetime

from peewee import *

from . import db


class Contacts(Model):
    name = CharField(max_length=60)
    phone = CharField(13)
    address = CharField()
    email = CharField()

    class Meta:
        database = db

    @classmethod
    def add_contacts(cls, name, phone, address, email):
        try:
            with db.transaction():
                cls.create(
                    name=name,
                    phone=phone,
                    address=address,
                    email=email)
        except IntegrityError:
            raise ValueError("Contact already exists")


class Program(Model):
    is_active = BooleanField()
    title = CharField()
    content = TextField()
    picture = CharField()
    is_necessary = BooleanField()
    required = CharField()
    published = DateField(default=datetime.datetime.now())
    ending = DateField(default=datetime.datetime.now())
    viewed = IntegerField()

    class Meta:
        database = db

    @classmethod
    def new_program(cls, is_active, title, content, picture, is_necessary, required,
                    viewed):

        with db.transaction():
            cls.create(
                is_active=is_active,
                title=title,
                content=content,
                picture=picture,
                is_necessary=is_necessary,
                required=required,
                viewed=viewed)


def initialize():
    db.connect()
    db.create_tables([Program], safe=True)
    db.close()