from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class GoalModel(models.Model):
    owner = models.ForeignKey('auth.User', related_name='goals', on_delete=models.CASCADE)
    goal = models.CharField(max_length=100)
    description = models.TextField()
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.goal