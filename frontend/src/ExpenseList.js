import React from 'react';
import axios from 'axios';
import './ExpenseList.css';

function ExpenseList({ expenses, onEdit, onUpdate }) {
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/expenses/${id}`);
    onUpdate();
  };

  return (
    <ul className="expense-list">
      {expenses.map((e) => (
        <li className="expense-item" key={e._id}>
          <div className="expense-details">
            {e.date.slice(0, 10)} — ₹{e.amount} [{e.category}]: {e.description}
          </div>
          <div className="expense-buttons">
            <button onClick={() => onEdit(e)}>Edit</button>
            <button onClick={() => handleDelete(e._id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
