import React, { useState } from "react";

function TaskInput({ addTask }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim()) {
      addTask(text);
      setText("");
    }
  };

  return (
    <div className="input-section">
      <input
        id="task-input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleAdd()}
        placeholder="Enter a new task..."
      />
      <button onClick={handleAdd} id="add-btn">
        Add Task
      </button>
    </div>
  );
}

export default TaskInput;
