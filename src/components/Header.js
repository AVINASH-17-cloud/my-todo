import React from "react";

function Header({ darkMode, setDarkMode }) {
  return (
    <div className="todo-header">
      <h2>MY TODO LIST</h2>
      <div className="theme-switch-wrapper">
        <label className="theme-switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <div className="slider round"></div>
        </label>
        <span className="theme-label">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </span>
      </div>
    </div>
  );
}

export default Header;
