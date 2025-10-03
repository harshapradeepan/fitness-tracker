import React, { useState } from 'react';
import api from '../api';

export default function StepForm({ onSaved }) {
  const [date, setDate] = useState(new Date().toISOString().slice(0,10));
  const [steps, setSteps] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.post('steps/', { date, steps: Number(steps) });
      setSteps('');
      if (onSaved) onSaved();
    } catch (err) {
      console.error(err);
      alert('Failed to save steps');
    }
  };

  return (
    <form onSubmit={submit} style={{display:'grid', gap:8, maxWidth:400}}>
      <input type="date" value={date} onChange={e=>setDate(e.target.value)} required />
      <input placeholder="Steps (e.g. 8000)" value={steps} onChange={e=>setSteps(e.target.value)} required />
      <button type="submit">Save steps</button>
    </form>
  );
}
