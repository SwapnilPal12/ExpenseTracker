import React, { useState } from "react";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import Statistics from "./components/Statistics";
import FilterExpenses from "./components/FilterExpenses";

import Tour from "./components/Tour";
import "./styles.css";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const [currentExpense, setCurrentExpense] = useState(null);

  const addExpenseHandler = (expense) => {
    if (currentExpense) {
      setExpenses((prevExpenses) =>
        prevExpenses.map((exp) => (exp.id === expense.id ? expense : exp))
      );
      setCurrentExpense(null);
    } else {
      setExpenses((prevExpenses) => [...prevExpenses, expense]);
    }
    setFilteredExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  const editExpenseHandler = (expense) => {
    setCurrentExpense(expense);
  };

  const deleteExpenseHandler = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
    setFilteredExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  };

  const filterExpensesHandler = (filter, startDate, endDate) => {
    let filtered = expenses.filter((expense) => expense.title.includes(filter));
    if (startDate) {
      filtered = filtered.filter(
        (expense) => new Date(expense.date) >= new Date(startDate)
      );
    }
    if (endDate) {
      filtered = filtered.filter(
        (expense) => new Date(expense.date) <= new Date(endDate)
      );
    }
    setFilteredExpenses(filtered);
  };

  return (
    <div className="App">
      <h2 className="card-title">Expense Tracker</h2>
      <AddExpense
        onAddExpense={addExpenseHandler}
        currentExpense={currentExpense}
      />
      <FilterExpenses onFilter={filterExpensesHandler} />
      <Statistics expenses={filteredExpenses} />
      <ExpenseList
        expenses={filteredExpenses}
        onEditExpense={editExpenseHandler}
        onDeleteExpense={deleteExpenseHandler}
      />
      <Tour />
    </div>
  );
};

export default App;
