import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [editing, setEditing] = useState(null);

  const fetchExpenses = async () => {
    const res = await axios.get('http://localhost:5000/expenses');
    setExpenses(res.data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>
      <ExpenseForm editing={editing} onUpdate={fetchExpenses} />
      <ExpenseList expenses={expenses} onEdit={setEditing} onUpdate={fetchExpenses} />
      <ExpenseChart expenses={expenses} />
    </div>
  );
}

export default App;
