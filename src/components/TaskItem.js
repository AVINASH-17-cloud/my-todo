import React from "react";

function TaskItem({ task, toggleTask, deleteTask, editTask }) {
  return (
    <li className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        className="task-checkbox"
      />
      <span className={`task-text ${task.completed ? "completed" : ""}`}>
        {task.text}
      </span>
      <div className="task-actions">
        <button className="edit-btn" onClick={() => editTask(task.id)}>
          ✎
        </button>
        <button className="delete-btn" onClick={() => deleteTask(task.id)}>
          ✕
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
