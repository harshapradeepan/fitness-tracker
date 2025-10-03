from django.db import models

class Workout(models.Model):
    date = models.DateField()
    workout_type = models.CharField(max_length=100)
    duration_minutes = models.PositiveIntegerField()
    calories = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.date} - {self.workout_type}"

class StepEntry(models.Model):
    date = models.DateField(unique=True)
    steps = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.date} - {self.steps}"
