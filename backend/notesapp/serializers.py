from rest_framework import serializers
from .models import Folder, Note

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ['id', 'name', 'no_of_cards', 'user']

class FolderSerializer(serializers.ModelSerializer):
    notes_count = serializers.SerializerMethodField()

    class Meta:
        model = Folder
        fields = ['id', 'name', 'notes_count', 'user']

    def get_notes_count(self, obj):
        return obj.notes.count()

class FolderCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Folder
        fields = ['name']

    def create(self, validated_data):
        # Associate the folder with the authenticated user
        folder = Folder.objects.create(user=self.context['request'].user, **validated_data)
        return folder

class NotesDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ['id', 'name']

    def create(self, validated_data):
        # Associate the note with the authenticated user and with the folder with folder id
        
        note = Note.objects.create(user=self.context['request'].user, folder= self.context['request'].folder, **validated_data)
        return note

