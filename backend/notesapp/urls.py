from django.urls import path
from .views import FolderListView, FolderDetailView, FolderCreateView

urlpatterns = [
    # List folders associated with the authenticated user
    path('', FolderListView.as_view(), name='folder-list'),

    # Retrieve details of a specific folder
    path('folder/<int:pk>/', FolderDetailView.as_view(), name='folder-detail'),

    # Create a new folder associated with the authenticated user
    path('folder/', FolderCreateView.as_view(), name='folder-create'),
]
