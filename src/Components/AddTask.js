import React from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../JS/actions/task";
import { useState } from "react";
import "./AddTask.css";
const AddTask = () => {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addTask({ id: Math.random(), description, isDone: false }));
    setDescription("");
  };
  return (
    <form id="myDIV">
      <input
        className="input"
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button className="addBtn" onClick={handleAdd}>
        Add
      </button>
    </form>
  );
};

export default AddTask;
