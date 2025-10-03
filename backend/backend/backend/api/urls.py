from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import WorkoutViewSet, StepEntryViewSet

router = DefaultRouter()
router.register(r'workouts', WorkoutViewSet, basename='workout')
router.register(r'steps', StepEntryViewSet, basename='steps')

urlpatterns = [
    path('', include(router.urls)),
]
