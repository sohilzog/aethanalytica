from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class TodoModel(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    date=models.DateField(auto_now_add=True)