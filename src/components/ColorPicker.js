// src/components/ColorPicker.js
import React from 'react';
import './ColorPicker.css';

function ColorPicker({ color, onColorChange, label }) {
  return (
    <label className="color-picker">
      {label}:
      <input type="color" value={color} onChange={(e) => onColorChange(e.target.value)} />
    </label>
  );
}

export default ColorPicker;
