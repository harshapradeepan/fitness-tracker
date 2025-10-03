from rest_framework import serializers
from .models import Workout, StepEntry

class WorkoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workout
        fields = '__all__'

class StepEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = StepEntry
        fields = '__all__'
