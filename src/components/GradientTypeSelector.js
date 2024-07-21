// src/components/GradientTypeSelector.js
import React from 'react';
import './GradientTypeSelector.css';

function GradientTypeSelector({ gradientType, onGradientTypeChange, angle, onAngleChange }) {
  return (
    <div className="gradient-type-selector">
      <label>
        Gradient Type:
        <select value={gradientType} onChange={(e) => onGradientTypeChange(e.target.value)}>
          <option value="linear">Linear</option>
          <option value="radial">Radial</option>
        </select>
      </label>
      {gradientType === 'linear' && (
        <label>
          Angle:
          <input
            type="number"
            value={angle}
            onChange={(e) => onAngleChange(e.target.value)}
            min="0"
            max="360"
          />
        </label>
      )}
    </div>
  );
}

export default GradientTypeSelector;
