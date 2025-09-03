import React from "react";

function Header({ darkMode, setDarkMode }) {
  return (
    <div className="header">
      <h1 className="title">My To-Do List</h1>
      <button
        className="dark-mode-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀ Light" : "🌙 Dark"}
      </button>
    </div>
  );
}

export default Header;
