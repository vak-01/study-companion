from django.urls import path, include 
from . import views

urlpatterns = [
    path('', views.GoalList.as_view(), name='goal'),
    path('<int:id>/', views.goal_detail, name='goal-detail'),
]