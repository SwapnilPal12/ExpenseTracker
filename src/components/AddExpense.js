import React, { useState, useEffect } from "react";

const AddExpense = ({ onAddExpense, currentExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (currentExpense) {
      setTitle(currentExpense.title);
      setAmount(currentExpense.amount);
      setDate(currentExpense.date);
    }
  }, [currentExpense]);

  const submitHandler = (event) => {
    event.preventDefault();
    const expense = {
      title,
      amount: parseFloat(amount),
      date,
      id: currentExpense ? currentExpense.id : Math.random().toString(),
    };
    onAddExpense(expense);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler} className="add-expense-form">
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button type="submit">
        {currentExpense ? "Update Expense" : "Add Expense"}
      </button>
    </form>
  );
};

export default AddExpense;
