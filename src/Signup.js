// Signup.js
import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setProfile } from './profileSlice';


const Signup = ({ onSignupComplete }) => {
  const { signup } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignup = (event) => {
    event.preventDefault();
    signup(username, password);
    // setProfile action updates the user's profile information in the reduxx store
    // dispatch func is used to send actions to redux store 
    dispatch(setProfile({ name: username, email: `${username}@gmail.com` }));
    onSignupComplete(); // Notify parent component that signup is complete
    navigate('/login');
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default Signup;
