from marshmallow import Serializer, fields


class UserSerializer(Serializer):
    class Meta:
        fields = ('id', 'username', 'name', 'phone', 'address', 'email')