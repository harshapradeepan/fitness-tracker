import React, { useState } from 'react';
import api from '../api';

export default function WorkoutForm({ onSaved }) {
  const [date, setDate] = useState(new Date().toISOString().slice(0,10));
  const [type, setType] = useState('');
  const [duration, setDuration] = useState('');
  const [calories, setCalories] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.post('workouts/', {
        date,
        workout_type: type,
        duration_minutes: Number(duration),
        calories: Number(calories),
      });
      setType(''); setDuration(''); setCalories('');
      if (onSaved) onSaved();
    } catch (err) {
      console.error(err);
      alert('Failed to save workout');
    }
  };

  return (
    <form onSubmit={submit} style={{display:'grid', gap:8, maxWidth:400}}>
      <input type="date" value={date} onChange={e=>setDate(e.target.value)} required />
      <input placeholder="Workout type (e.g. Run)" value={type} onChange={e=>setType(e.target.value)} required />
      <input placeholder="Duration (minutes)" value={duration} onChange={e=>setDuration(e.target.value)} required />
      <input placeholder="Calories" value={calories} onChange={e=>setCalories(e.target.value)} required />
      <button type="submit">Save workout</button>
    </form>
  );
}
