from django.db import models
from django.contrib.auth.models import User
import uuid

class Folder(models.Model):
    user = models.ForeignKey(User, related_name='folders', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Note(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, related_name='notes', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    no_of_cards = models.IntegerField()
    folder = models.ForeignKey(Folder, related_name='notes', on_delete=models.CASCADE)
    contents = models.TextField()  # Field to store the contents of the note

    def __str__(self):
        return self.name
