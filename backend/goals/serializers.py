from rest_framework import serializers
from .models import GoalModel


class GoalModelSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = GoalModel
        fields = ['id', 'goal', 'description', 'completed', 'owner']

        def create(self, validated_data):
            validated_data['owner'] = self.context['request'].user
            return super().create(validated_data)