import React from "react";

function Filters({ filter, setFilter }) {
  return (
    <div className="filters">
      {["all", "active", "completed"].map((f) => (
        <button
          key={f}
          className={`filter-btn ${filter === f ? "active" : ""}`}
          onClick={() => setFilter(f)}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default Filters;
