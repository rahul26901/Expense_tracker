import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart, ArcElement, CategoryScale, BarElement, LinearScale, Tooltip, Legend } from 'chart.js';
import './ExpenseChart.css';

Chart.register(ArcElement, CategoryScale, BarElement, LinearScale, Tooltip, Legend);

function ExpenseChart({ expenses }) {
  const categoryTotals = {};
  const monthlyTotals = {};

  expenses.forEach(e => {
    const dateObj = new Date(e.date);
    const monthYear = `${dateObj.toLocaleString('default', { month: 'short' })} ${dateObj.getFullYear()}`;
    categoryTotals[e.category] = (categoryTotals[e.category] || 0) + e.amount;
    monthlyTotals[monthYear] = (monthlyTotals[monthYear] || 0) + e.amount;
  });

  return (
    <div className="chart-container">
      <h3>Category-wise Expense Distribution</h3>
      <div className="chart-wrapper">
        <Pie
          data={{
            labels: Object.keys(categoryTotals),
            datasets: [{
              data: Object.values(categoryTotals),
              backgroundColor: [
                'rgba(255, 99, 132, 0.7)',   
                'rgba(54, 162, 235, 0.7)',  
                'rgba(255, 206, 86, 0.7)',   
                'rgba(75, 192, 192, 0.7)',  
                'rgba(153, 102, 255, 0.7)',  
                'rgba(255, 159, 64, 0.7)' 
              ],
              borderColor: 'rgba(255, 255, 255, 1)',
              borderWidth: 2,
            }]
          }}
          options={{
            plugins: {
              tooltip: {
                callbacks: {
                  label: function (context) {
                    const label = context.label || '';
                    const value = context.parsed || 0;
                    return `${label}: ₹${value}`;
                  }
                }
              },
              legend: {
                position: 'bottom',
                labels: {
                  color: 'rgba(51, 51, 51, 1)',
                  font: {
                    size: 14
                  }
                }
              }
            }
          }}
        />
      </div>

      <h3>Monthly Expense Summary</h3>
      <div className="chart-wrapper">
        <Bar
          data={{
            labels: Object.keys(monthlyTotals),
            datasets: [{
              label: 'Total Spent',
              data: Object.values(monthlyTotals),
              backgroundColor: 'rgba(75, 192, 192, 0.7)',
              borderRadius: 6,
            }]
          }}
          options={{
            scales: {
              y: {
                beginAtZero: true,
                ticks: { color: 'rgba(51, 51, 51, 1)' }
              },
              x: {
                ticks: { color: 'rgba(51, 51, 51, 1)' }
              }
            },
            plugins: {
              legend: { display: false }
            }
          }}
        />
      </div>
    </div>
  );
}

export default ExpenseChart;
