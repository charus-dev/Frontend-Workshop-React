// AuthContext.js
import React, { createContext, useState } from 'react';

// Creating a Context Object.
export const AuthContext = createContext();
// AuthContext holds and provide the authentication-related state and functions to any component

// AuthProvider Component holds all the states and functions I want to use further
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userCredentials, setUserCredentials] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const signup = (username, password) => {
    setUserCredentials({ username, password });
    console.log('User signed up:', username);
  };
  

  const login = (username, password) => {
    // if (userCredentials && userCredentials.username === username && userCredentials.password === password) {
    //   setIsAuthenticated(true);
    // } else {
    //   alert('Invalid login credentials');
    //   setIsAuthenticated(false);
    // }
    if (userCredentials && userCredentials.username === username && userCredentials.password === password) {
      return true; // Login success
    } else {
      alert('Invalid login credentials');
      return false; // Login failed
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserCredentials(null);
  };
  const setProfile = (userData) => {
    setCurrentUser(userData); // Set user profile
  };

  const clearProfile = () => {
    setCurrentUser(null); // Clear user profile
  };

  return (
    // By using AuthContext.Provider - I am able to use the functions and states across all the different components that are wrapped inside it.
    // Due to this I dont have to pass them as props in every component.
    // <AuthContext.Provider value={{ isAuthenticated, login, signup, logout }}>
    //   {children}
    // </AuthContext.Provider>
    <AuthContext.Provider
    value={{
      isAuthenticated,
      setIsAuthenticated,
      currentUser,
      setCurrentUser,
      signup,
      login,
      logout,
      setProfile,
      clearProfile
    }}
  >
    {children}
  </AuthContext.Provider>
  );
};


