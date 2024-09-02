// MainComponent.js
import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthContext';
import Signup from './Signup';
import Login from './Login';
import Greeting from './Greetings';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Profile from './Profile';

const MainComponent = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const [isSignupComplete, setIsSignupComplete] = useState(false);

  // This function will be called when signup is complete
  const handleSignupComplete = () => {
    setIsSignupComplete(true); // Update the state to show the login page
  };

  if (isAuthenticated) {
    return <Greeting />; // Show Greeting component if authenticated
  }

  return (
    <div>
       <nav>
        <Link to="/signup">Sign Up</Link> | <Link to="/login">Login</Link> | <Link to="/profile">Profile </Link>
      </nav>
      <Routes>
        <Route path="/signup" element={<Signup onSignupComplete={handleSignupComplete} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} /> {/* Add route for Profile */}
        {isAuthenticated && <Route path="/greeting" element={<Greeting />} />}
        {/* Redirect if authenticated */}
        {isAuthenticated ? (
          <Route path="*" element={<Navigate to="/greeting" />} />
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </div>
  );
};

export default MainComponent;
