import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createTransaction, fetchTransaction, updateTransaction } from '../api';

export default function AddEdit({ editMode }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title:'', amount:0, date: new Date().toISOString().slice(0,10), category:'' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetchTransaction(id).then(data => {
        setForm({
          title: data.title || '',
          amount: data.amount || 0,
          date: new Date(data.date).toISOString().slice(0,10),
          category: data.category || ''
        });
        setLoading(false);
      });
    }
  }, [id]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: name === 'amount' ? Number(value) : value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (id) {
      await updateTransaction(id, { ...form, date: new Date(form.date).toISOString() });
    } else {
      await createTransaction({ ...form, date: new Date(form.date).toISOString() });
    }
    navigate('/');
  }

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>{id ? 'Edit Transaction' : 'Add Transaction'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Title</label>
          <input name="title" value={form.title} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <label>Amount (use negative for expense, positive for income)</label>
          <input name="amount" type="number" step="0.01" value={form.amount} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <label>Date</label>
          <input name="date" type="date" value={form.date} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <label>Category</label>
          <input name="category" value={form.category} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn-primary">{id ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
}
