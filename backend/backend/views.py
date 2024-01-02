from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def logout(request):
    # simply delete the token to force a login
    request.user.auth_token.delete()
    return Response(status=status.HTTP_200_OK)