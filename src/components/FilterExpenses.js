import React, { useState } from "react";

const FilterExpenses = ({ onFilter }) => {
  const [filter, setFilter] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const filterChangeHandler = (event) => {
    setFilter(event.target.value);
    onFilter(event.target.value, startDate, endDate);
  };

  const startDateChangeHandler = (event) => {
    setStartDate(event.target.value);
    onFilter(filter, event.target.value, endDate);
  };

  const endDateChangeHandler = (event) => {
    setEndDate(event.target.value);
    onFilter(filter, startDate, event.target.value);
  };

  return (
    <div className="filter-expenses">
      <label>Filter by Title</label>
      <input type="text" value={filter} onChange={filterChangeHandler} />
      <label>Start Date</label>
      <input type="date" value={startDate} onChange={startDateChangeHandler} />
      <label>End Date</label>
      <input type="date" value={endDate} onChange={endDateChangeHandler} />
    </div>
  );
};

export default FilterExpenses;
