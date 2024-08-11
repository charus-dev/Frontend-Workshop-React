import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './style.css'; // Import the CSS file for styles
import ColorPicker from './ColorPicker';

function Greeting() {
  const [name, setName] = useState('');
  const [color, setColor] = useState('#000000'); // Default color

  return (
    <div className="Greeting">
      <h2 style={{ color: color }}>
        Hello, {name ? name : 'Guest'}!
      </h2>
      <input 
        type="text" 
        placeholder="Enter your name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        className="form-control mb-3" // Bootstrap input styling
      />
      <ColorPicker onColorChange={setColor} /> {/* Keep the ColorPicker component */}
      <ProductCard /> {/* Add ProductCard component */}
    </div>
  );
}

export default Greeting;
