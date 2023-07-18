import React, { useState } from "react";

const ToDoapp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleTaskChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };
  return (
    <>
      <div className="container my-5">
        <h1>From AI</h1>
        <div>
          <h1>Todo List</h1>
          <input type="text" value={newTask} onChange={handleTaskChange} />
          <button onClick={handleAddTask}>Add Task</button>

          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {task}
                <button onClick={() => handleRemoveTask(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ToDoapp;
