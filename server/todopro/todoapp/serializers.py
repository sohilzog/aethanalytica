from .models import TodoModel
from rest_framework import serializers
from django.contrib.auth.models import User

class TodoSerializer(serializers.ModelSerializer):
    user=serializers.CharField(read_only=True)
    date=serializers.CharField(read_only=True)
    class Meta:
        model = TodoModel
        fields = "__all__"
    def create(self,validated_data):
        user=self.context.get("user")
        return TodoModel.objects.create(user=user,**validated_data)


class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=["username","email","password"]
    def create(self,validated_data):
             return User.objects.create_user(**validated_data)
