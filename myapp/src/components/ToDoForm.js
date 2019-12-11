import React, { useState } from "react";

const ToDoForm = ({ dispatch }) => {
  const [newTask, setNewTask] = useState("");

  const handleChanges = e => {
    console.log(e.target.value, " -->  is newTask State ");
    setNewTask(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD_TASK", payload: newTask });
    setNewTask("");
  };

  const clearTasks = e => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    <div className="form">
      <div className="searchBar">
        <form onSubmit={handleSubmit}>
          <label htmlFor="task"> </label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="Enter Task Here"
            value={newTask}
            onChange={handleChanges}
          />
        </form>
      </div>
      <div className="addTask">
        <button type="submit" className="addButton" onClick={handleSubmit}>
          Add Task
        </button>
      </div>
      <div className="clearTask">
        <button onClick={clearTasks} className="clearButton">
          Clear Completed Tasks
        </button>
      </div>
    </div>
  );
};

export default ToDoForm;
