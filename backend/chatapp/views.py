from django.shortcuts import render
import google.generativeai as genai
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response

from django.http import Http404
from rest_framework.views import APIView
from rest_framework import status
from rest_framework import permissions
from dotenv import load_dotenv
import os
from pathlib import Path

load_dotenv()

GOOGLE_API_KEY = os.getenv('GAPI_KEY')
genai.configure(api_key=GOOGLE_API_KEY)
model = genai.GenerativeModel('gemini-pro')

# Create your views here.
@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def generate_text(request):
    # Generate text using the Gemini pro model
    print(request)
    query = request.data.get('question')
    print(request.POST)
    if query is None:
        return Response({'error': 'Please provide a question'}, status=status.HTTP_400_BAD_REQUEST)
    
    response = model.generate_content(query)
    return Response({'text': response.text}, status=status.HTTP_200_OK)