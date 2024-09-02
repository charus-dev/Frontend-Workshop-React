import React from 'react';
import MainComponent from './MainComponent';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'; // Import your store

// Use of Arrow function here, can also be written without arrow function 
const App = () => {
  return (
    <AuthProvider>
      {/* Redux store is provided to the React application */}
      <Provider store={store}>
     <Router>
    <div className="App">
    <MainComponent />
    </div>
    </Router>
    </Provider>
  </AuthProvider>
  );
}
export default App;
