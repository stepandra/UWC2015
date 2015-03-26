from marshmallow import Serializer, fields
from user_serializer import UserSerializer



class ContactsSerializer(Serializer):
    class Meta:
        fields = ("name", "phone", "address", "email")


class ProgramSerializer(Serializer):
    user = fields.Nested(UserSerializer, exclude=("id", "username"))

    class Meta:
        fields = ("is_active", "title", "content", "picture", "is_necessary", "required", "user", "published", "ending", "viewed")
