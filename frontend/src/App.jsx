import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddEdit from './pages/AddEdit';
import Delete from './pages/Delete';

export default function App() {
  return (
    <div className="container">
      <header>
        <h1>Personal Finance Tracker</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/add">Add Transaction</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddEdit />} />
          <Route path="/:id/edit" element={<AddEdit editMode />} />
          <Route path="/:id/delete" element={<Delete />} />
        </Routes>
      </main>
    </div>
  );
}
