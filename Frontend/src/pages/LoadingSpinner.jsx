// src/components/LoadingSpinner.js
import React from 'react';
import './LoadingSpinner.css'; // Make sure to create this CSS file

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner-container">
      <div className="spinner"></div>
      <p>Loading content...</p>
    </div>
  );
};

export default LoadingSpinner;