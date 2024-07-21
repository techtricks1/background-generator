// src/components/Preview.js
import React, { useState, useEffect } from 'react';
import './Preview.css';

function Preview({ initialStyle }) {
  const [style, setStyle] = useState(initialStyle);

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleMouseMove = () => {
    const newColor1 = generateRandomColor();
    const newColor2 = generateRandomColor();
    const newStyle = initialStyle.includes('linear')
      ? `linear-gradient(${initialStyle.split(' ')[1]}, ${newColor1}, ${newColor2})`
      : `radial-gradient(circle, ${newColor1}, ${newColor2})`;
    setStyle(newStyle);
  };

  useEffect(() => {
    setStyle(initialStyle);
  }, [initialStyle]);

  return (
    <div
      className="preview"
      style={{ background: style }}
      onMouseMove={handleMouseMove}
    >
      <h2>Preview</h2>
    </div>
  );
}

export default Preview;
