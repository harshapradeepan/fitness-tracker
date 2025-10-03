from rest_framework import viewsets
from .models import Workout, StepEntry
from .serializers import WorkoutSerializer, StepEntrySerializer

class WorkoutViewSet(viewsets.ModelViewSet):
    queryset = Workout.objects.all().order_by('-date')
    serializer_class = WorkoutSerializer

class StepEntryViewSet(viewsets.ModelViewSet):
    queryset = StepEntry.objects.all().order_by('-date')
    serializer_class = StepEntrySerializer
