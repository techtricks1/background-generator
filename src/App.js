// src/App.js
import React, { useState } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import GradientTypeSelector from './components/GradientTypeSelector';
import Preview from './components/Preview';

function App() {
  const [color1, setColor1] = useState('#ff0000');
  const [color2, setColor2] = useState('#0000ff');
  const [gradientType, setGradientType] = useState('linear');
  const [angle, setAngle] = useState(90);

  const getBackgroundStyle = () => {
    if (gradientType === 'linear') {
      return `linear-gradient(${angle}deg, ${color1}, ${color2})`;
    } else {
      return `radial-gradient(circle, ${color1}, ${color2})`;
    }
  };

  const getCSSCode = () => {
    if (gradientType === 'linear') {
      return `background: linear-gradient(${angle}deg, ${color1}, ${color2});`;
    } else {
      return `background: radial-gradient(circle, ${color1}, ${color2});`;
    }
  };

  return (
    <div className="App">
      <h1>Background Generator</h1>
      <div className="controls">
        <div className="control">
          <ColorPicker color={color1} onColorChange={setColor1} label="Color 1" />
        </div>
        <div className="control">
          <ColorPicker color={color2} onColorChange={setColor2} label="Color 2" />
        </div>
        <div className="control">
          <GradientTypeSelector
            gradientType={gradientType}
            onGradientTypeChange={setGradientType}
            angle={angle}
            onAngleChange={setAngle}
          />
        </div>
      </div>
      <Preview initialStyle={getBackgroundStyle()} />
      <div className="css-code">
        <h3>CSS Code</h3>
        <code>{getCSSCode()}</code>
      </div>
    </div>
  );
}

export default App;
