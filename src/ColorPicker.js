import React from 'react';
import './style.css'; // Ensure your styles are imported

function ColorPicker({ onColorChange }) {
  const handleColorChange = (event) => {
    onColorChange(event.target.value);
  };

  return (
    <div className="color-picker-container">
      <label className="color-picker-label">Select a color:</label>
      <input
        type="color"
        onChange={handleColorChange}
        className="color-picker-input"
      />
    </div>
  );
}

export default ColorPicker;
