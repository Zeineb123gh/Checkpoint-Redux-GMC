import React from "react";
import "./Filter.css";

const Filter = ({ setStatus }) => {
  return (
    <div className="filter">
      <button onClick={() => setStatus("all")}>All</button>
      <button onClick={() => setStatus("done")}>Done</button>
      <button onClick={() => setStatus("undone")}>Undone</button>
    </div>
  );
};

export default Filter;
