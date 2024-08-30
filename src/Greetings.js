import React, { Component } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import ProductCard from './ProductCard';
import './style.css'; // Import the CSS file for styles
import ColorPicker from './ColorPicker';

// Example color list
const colors = ['#FF0000', '#00FF00', '#0000FF'];
const additionalColors = ['#A52A2A', '#5F9F9F', '#D2691E', '#FF6347', '#FF4500', '#2E8B57', '#3CB371', '#20B2AA', '#8A2BE2', '#7FFF00','#219C83', '#359C21', '#788475', '#B25910', '#FFFF00'];

class Greeting extends Component {
  // initial state of component
  constructor(props) { // props - used as an argument here
    // What's the use of 'super'? - to pass props to parent class
    super(props);
    this.state = { //use of 'this' keyword? - to access current state
      name: '',
      color: '#BBBCC9',
      showProductCard: true,
      colorList: colors,
    };
  }

  componentDidMount() { // calling this func once the component is rendered to DOM.
    // Simulate fetching user data with a Promise
    this.fetchUserData()
      .then((userData) => {
        // Use Template Literals to format the fetched name
        this.setState({ name: `Namaste, ${userData.name}` });
      })
      .catch((error) => console.error('Error fetching user data:', error));
  }

  componentDidUpdate(prevProps, prevState) {
    // This method will run after every update
    // Example: Log a message when the color changes
    if (prevState.color !== this.state.color) {
      console.log('Color has been updated:', this.state.color);
    }
  }

  componentWillUnmount() {
    // Cleanup logic can be added here if needed
    console.log('Greeting component is being unmounted');
  }

  fetchUserData() {
    // Simulate a Promise that resolves after 2 seconds
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ name: 'Charu' });
      }, 2000);
    });
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleColorChange = (color) => {
    this.setState({ color: color });
  };

  toggleProductCard = () => {
    this.setState((prevState) => ({ showProductCard: !prevState.showProductCard }));
  };

  handleColorListChange = () => {
    const { colorList } = this.state;

    // Find a new color not already in the colorList
    const newColor = additionalColors.find(c => !colorList.includes(c));

    if (newColor) {
      // Add the new color to the list
      this.updateColorList(newColor);
    } else {
      console.log('No new colors available to add');
    }
  };

  updateColorList = (newColor) => {
    this.setState((prevState) => ({
      colorList: [...prevState.colorList, newColor]
    }));
  };

  render() {
    const { name, color, showProductCard, colorList } = this.state; // Destructuring state

    return (
      <div className="Greeting">
        <h2 style={{ color: color }}>
          {`Hello, ${name ? name : 'Guest'}!`} {/* Template Literals */}
        </h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={name} // use of attributes
          onChange={this.handleNameChange}
          className="form-control mb-3"
        />
        <ColorPicker onColorChange={this.handleColorChange} />

        {/* Button to toggle visibility of ProductCard */}
        <button onClick={this.toggleProductCard} className="btn btn-primary">
          {showProductCard ? 'Hide' : 'Show'} Product Card
        </button>

        {/* Conditionally render ProductCard based on showProductCard state */}
        {showProductCard && <ProductCard  color={color} />} {/* Pass the color prop to ProductCard */}

        {/* Button to demonstrate findIndex() and Rest/Spread Operators */}
        <button onClick={this.handleColorListChange} className="btn btn-secondary mt-3">
          Update Color List
        </button>

        <div>
          <h3>Available Colors:</h3>
          <ul>
            {colorList.map((color, index) => (
              <li key={index} style={{ color }}>{color}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

// Default Props: Provides default value for props if not specified
Greeting.defaultProps = {
  defaultName: 'Guest',
};

// PropTypes: Validate the props used in Greeting component
Greeting.propTypes = {
  defaultName: PropTypes.string,
};

export default Greeting;
