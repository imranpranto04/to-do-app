import React, { useState } from "react";

const To = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleTaskChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { description: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const handleCompleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <>
      <div>
        <h1>Todo List</h1>
        <input type="text" value={newTask} onChange={handleTaskChange} />
        <button onClick={handleAddTask}>Add Task</button>

        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td>{task.description}</td>
                <td>
                  {task.completed ? (
                    "Completed"
                  ) : (
                    <button onClick={() => handleCompleteTask(index)}>
                      Complete
                    </button>
                  )}
                  <button onClick={() => handleRemoveTask(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default To;
