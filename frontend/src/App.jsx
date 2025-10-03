import React, { useEffect, useState } from 'react';
import api from './api';
import WorkoutForm from './components/workoutForms';
import StepForm from './components/stepForm';

export default function App() {
  const [workouts, setWorkouts] = useState([]);
  const [steps, setSteps] = useState([]);

  const load = async () => {
    try {
      const [wRes, sRes] = await Promise.all([api.get('workouts/'), api.get('steps/')]);
      setWorkouts(wRes.data);
      setSteps(sRes.data);
    } catch (err) {
      console.error('Failed loading', err);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div style={{ maxWidth: 800, margin: '20px auto', padding: 16 }}>
      <h1>Fitness Tracker</h1>

      <section style={{ marginBottom: 24 }}>
        <h2>Add Workout</h2>
        <WorkoutForm onSaved={load} />
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2>Add Steps</h2>
        <StepForm onSaved={load} />
      </section>

      <section>
        <h2>Workouts</h2>
        <ul>
          {workouts.length === 0 && <li>No workouts yet</li>}
          {workouts.map(w => (
            <li key={w.id}>
              <strong>{w.date}</strong> — {w.workout_type} ({w.duration_minutes} min) — {w.calories} cal
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Steps</h2>
        <ul>
          {steps.length === 0 && <li>No step entries yet</li>}
          {steps.map(s => (
            <li key={s.id}>
              <strong>{s.date}</strong> — {s.steps} steps
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
