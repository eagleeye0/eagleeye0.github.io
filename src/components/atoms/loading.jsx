import React from "react";
import "./loading.css"; // Import the CSS file

export default function Loading() {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
}
