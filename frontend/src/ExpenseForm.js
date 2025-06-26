import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ExpenseForm.css';

function ExpenseForm({ editing, onUpdate }) {
  const [form, setForm] = useState({
    amount: '',
    category: '',
    description: '',
    date: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editing) setForm(editing);
  }, [editing]);

  const validate = () => {
    const newErrors = {};
    if (!form.amount || isNaN(form.amount) || Number(form.amount) <= 0) {
      newErrors.amount = 'Amount must be a positive number';
    }
    if (!form.category.trim()) {
      newErrors.category = 'Category is required';
    }
    if (!form.description.trim()) {
      newErrors.description = 'Description is required';
    }
    if (!form.date) {
      newErrors.date = 'Date is required';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      if (editing) {
        await axios.put(`http://localhost:5000/expenses/${editing._id}`, form);
      } else {
        await axios.post('http://localhost:5000/expenses', form);
      }
      setForm({ amount: '', category: '', description: '', date: '' });
      setErrors({});
      onUpdate();
    } catch (err) {
      alert("Failed to save expense. Please try again.");
      console.error(err);
    }
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={form.amount}
        onChange={handleChange}
      />
      {errors.amount && <span className="error">{errors.amount}</span>}

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
      />
      {errors.category && <span className="error">{errors.category}</span>}

      <input
        type="text"
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
      />
      {errors.description && <span className="error">{errors.description}</span>}

      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
      />
      {errors.date && <span className="error">{errors.date}</span>}

      <button type="submit">{editing ? 'Update' : 'Add'} Expense</button>
    </form>
  );
}

export default ExpenseForm;
