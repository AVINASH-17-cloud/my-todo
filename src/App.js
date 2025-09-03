import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import Filters from "./components/Filters";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });
  const [filter, setFilter] = useState("all");
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("darkMode")) || false;
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Sync darkMode to localStorage AND to document.body class
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const editTask = (id) => {
    const task = tasks.find((t) => t.id === id);
    const newText = prompt("Edit your task:", task ? task.text : "");
    if (newText && newText.trim() !== "") {
      setTasks(
        tasks.map((t) => (t.id === id ? { ...t, text: newText.trim() } : t))
      );
    }
  };

  const clearCompleted = () => {
    setTasks(tasks.filter((t) => !t.completed));
  };

  return (
    <div className="main-container">
      <div className="image-section">
        <div className="circle-image"></div>
      </div>

      <div className="todo-section">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <TaskInput addTask={addTask} />
        <Filters filter={filter} setFilter={setFilter} />
        <TaskList
          tasks={tasks}
          filter={filter}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
        <div className="stats">
          <span id="tasks-left">
            {tasks.filter((t) => !t.completed).length} task
            {tasks.filter((t) => !t.completed).length !== 1 ? "s" : ""} left
          </span>
          <button id="clear-completed" onClick={clearCompleted}>
            Clear Completed
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
