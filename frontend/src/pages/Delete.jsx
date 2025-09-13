import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { fetchTransaction, deleteTransaction } from '../api';

export default function Delete() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [txn, setTxn] = useState(null);

  useEffect(() => {
    fetchTransaction(id).then(setTxn);
  }, [id]);

  async function handleDelete() {
    await deleteTransaction(id);
    navigate('/');
  }

  if (!txn) return <p>Loading...</p>;

  return (
    <div>
      <h2>Delete Transaction</h2>
      <p>Are you sure you want to delete:</p>
      <p><strong>{txn.title}</strong> — {txn.amount}</p>
      <button onClick={handleDelete} className="btn-danger">Yes, delete</button>
      {' '}<Link to="/" className="btn-ghost">Cancel</Link>
    </div>
  );
}
