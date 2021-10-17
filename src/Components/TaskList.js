import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";
import Filter from "./Filter";
import { useState } from "react";
import "./TaskList.css";

const TaskList = () => {
  const [status, setStatus] = useState("all");
  const tasks = useSelector((state) => state.taskReducer.tasks);
  return (
    <div>
      <Filter setStatus={setStatus} />

      <div>
        <li>
          {status == "all"
            ? tasks.map((task) => <Task task={task} key={task.id} />)
            : status == "done"
            ? tasks
                .filter((el) => el.isDone == true)
                .map((task) => <Task task={task} key={task.id} />)
            : tasks
                .filter((el) => el.isDone == false)
                .map((task) => <Task task={task} key={task.id} />)}
        </li>
      </div>
    </div>
  );
};

export default TaskList;
