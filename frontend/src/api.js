// src/api.js
import axios from 'axios';

// Base API instance
const api = axios.create({
  baseURL: 'https://fitness-tracker-uqmo.onrender.com/api/', // include /api prefix
});

// Workouts
export const saveWorkout = (workoutData) => {
  return api.post('/workouts/', workoutData);
};

// Runs / Steps
export const saveRun = (runData) => {
  return api.post('/runs/', runData);
};

// Calories
export const saveCalories = (caloriesData) => {
  return api.post('/calories/', caloriesData);
};

export default api;
