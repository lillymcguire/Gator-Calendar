from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Calendar(models.Model):
    title = models.CharField(max_length=70)
    is_public = models.BooleanField(default=True)
    creator = models.ForeignKey(User, on_delete=models.CASCADE)
