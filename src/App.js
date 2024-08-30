import React from 'react';
import Greeting from './Greetings';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Use of Arrow function here, can also be written without arrow function 
const App = () => {
  return (
    <div className="App">
      <Greeting />
    </div>
  );
}
export default App;
