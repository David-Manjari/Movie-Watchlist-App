import React from "react";

const STATUS_OPTIONS = ["Want to Watch", "Watching", "Watched"];

function WatchStatus({ status, onStatusChange }) {
  return (
    <div className="watch-status">
      <label htmlFor="status">Watch Status: </label>
      <select
        id="status"
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
      >
        {STATUS_OPTIONS.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default WatchStatus;
