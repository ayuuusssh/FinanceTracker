const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000/api';

export async function fetchTransactions() {
  const res = await fetch(`${API_BASE}/transactions`);
  return res.json();
}

export async function fetchTransaction(id) {
  const res = await fetch(`${API_BASE}/transactions/${id}`);
  return res.json();
}

export async function createTransaction(data) {
  const res = await fetch(`${API_BASE}/transactions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.json();
}

export async function updateTransaction(id, data) {
  const res = await fetch(`${API_BASE}/transactions/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.json();
}

export async function deleteTransaction(id) {
  const res = await fetch(`${API_BASE}/transactions/${id}`, {
    method: 'DELETE'
  });
  return res.json();
}
