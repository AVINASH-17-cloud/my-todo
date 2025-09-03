import React from "react";

function Header({ darkMode, setDarkMode }) {
  return (
    <div className="todo-header">
      <h2>My To-Do List</h2>
      <div className="theme-switch-wrapper">
        <label className="theme-switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <span className="slider"></span>
        </label>
        <span className="theme-label">
          {darkMode ? "Dark Mode" : "Light Mode"}
        </span>
      </div>
    </div>
  );
}

export default Header;
