import React from 'react';
import { Link } from 'react-router-dom';

export default function TransactionList({ transactions, onDelete }) {
  const total = transactions.reduce((s, t) => s + t.amount, 0);
  return (
    <div>
      <h2>Transactions</h2>
      <p><strong>Balance:</strong> {total.toFixed(2)}</p>
      <table>
        <thead>
          <tr><th>Title</th><th>Amount</th><th>Date</th><th>Category</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {transactions.map(t => (
            <tr key={t._id}>
              <td>{t.title}</td>
              <td className={t.amount >= 0 ? 'income' : 'expense'}>{t.amount.toFixed(2)}</td>
              <td>{new Date(t.date).toLocaleDateString()}</td>
              <td>{t.category}</td>
              <td>
                <Link to={`/${t._id}/edit`} className="btn-ghost">Edit</Link>
                {' '}
                <Link to={`/${t._id}/delete`} className="btn-danger">Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
