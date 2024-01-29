from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .models import GoalModel
from .serializers import GoalModelSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework import status
from rest_framework import permissions


class GoalList(APIView):
    """
    List all snippets, or create a new goal.
    """
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def get_object(self, id, user):
        try:
            return GoalModel.objects.get(id=id, owner=user)
        except GoalModel.DoesNotExist:
            raise Http404

    def get(self, request, format=None):
        goals = GoalModel.objects.filter(owner = self.request.user)
        serializer = GoalModelSerializer(goals, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = GoalModelSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(owner = self.request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['PATCH', 'PUT', 'DELETE'])
@permission_classes([permissions.IsAuthenticated])
def goal_detail(request, id):
    """
    Retrieve, update or delete a goal.
    """
    try:
        goal = GoalModel.objects.get(id=id, owner=request.user)
    except GoalModel.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PATCH':
        goal.completed = not goal.completed
        goal.save()
        return Response(status=status.HTTP_204_NO_CONTENT)

    elif request.method == 'PUT':
        serializer = GoalModelSerializer(goal, data=request.data)
        if serializer.is_valid():
            serializer.save(owner = request.user)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        goal.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)