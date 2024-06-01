import React from "react";

const ExpenseList = ({ expenses, onEditExpense, onDeleteExpense }) => {
  return (
    <ul className="expense-list">
      {expenses.map((expense) => (
        <li key={expense.id} className="expense-item">
          <span>{expense.title}</span>
          <span>Rs.{expense.amount.toFixed(2)}</span>
          <span>{new Date(expense.date).toLocaleDateString()}</span>
          <div className="actions">
            <button onClick={() => onEditExpense(expense)}>Edit</button>
            <button onClick={() => onDeleteExpense(expense.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
