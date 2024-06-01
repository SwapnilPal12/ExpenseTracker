import React from "react";

const Statistics = ({ expenses }) => {
  const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const count = expenses.length;

  const monthlyExpenses = expenses.reduce((acc, expense) => {
    const month = new Date(expense.date).getMonth();
    if (!acc[month]) {
      acc[month] = 0;
    }
    acc[month] += expense.amount;
    return acc;
  }, {});

  return (
    <div className="statistics">
      <h3>Statistics</h3>
      <p>Total Expenses: Rs.{total.toFixed(2)}</p>
      <p>Number of Expenses: {count}</p>
      <h4>Monthly Totals</h4>
      {Object.keys(monthlyExpenses).map((month) => (
        <p key={month}>
          Month {parseInt(month) + 1}: Rs.{monthlyExpenses[month].toFixed(2)}
        </p>
      ))}
    </div>
  );
};

export default Statistics;
