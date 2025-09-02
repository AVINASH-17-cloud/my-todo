import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, filter, toggleTask, deleteTask, editTask }) {
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <ul id="task-list">
      {filteredTasks.length === 0 ? (
        <div className="empty-state">
          <i className="fas fa-clipboard-list"></i>
          <p>
            {filter === "all"
              ? "No tasks yet"
              : filter === "active"
              ? "All tasks completed"
              : "No tasks completed yet"}
          </p>
          <p className="subtext">Add a task to get started</p>
        </div>
      ) : (
        filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))
      )}
    </ul>
  );
}

export default TaskList;
