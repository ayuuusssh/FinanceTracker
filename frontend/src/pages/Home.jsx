import React, { useEffect, useState } from 'react';
import TransactionList from '../components/TransactionList';
import { fetchTransactions } from '../api';

export default function Home() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    const data = await fetchTransactions();
    setTransactions(data);
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  return (
    <div>
      {loading ? <p>Loading...</p> : <TransactionList transactions={transactions} />}
    </div>
  );
}
