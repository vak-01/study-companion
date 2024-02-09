from django.urls import path, include 
from . import views

urlpatterns = [
    path('', views.generate_text, name='chat'),
]