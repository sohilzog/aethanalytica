from django.shortcuts import render
from .models import TodoModel
from .serializers import TodoSerializer
from rest_framework.viewsets import ModelViewSet
from todoapp.serializers import TodoSerializer,UserRegisterSerializer
from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from rest_framework import authentication,permissions

# Create your views here.
class UserRegisterView(ViewSet):
    def create(self,request,*args,**kwargs):
        serializer=UserRegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data)
        else:
            return Response(data=serializer.errors)
        

class TodoView(ModelViewSet):
    authentication_classes=[authentication.TokenAuthentication]
    permission_classes=[permissions.IsAuthenticated]
    serializer_class = TodoSerializer
    queryset = TodoModel.objects.all()

    def create(self,request,*args,**kwargs):
            serializer = TodoSerializer(data=request.data,context={"user":request.user})
            if serializer.is_valid():
                 serializer.save()
                 return Response(data=serializer.data)
            else:
                 return Response(data=serializer.errors)