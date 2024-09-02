// Login.js
import React, { useState, useContext, useRef } from 'react';
import { AuthContext } from './AuthContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  // AuthContext hook is used to access the authentication context provided by AuthProvider.
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const { setIsAuthenticated, setCurrentUser } = useContext(AuthContext);
  const [loginId, setLoginId] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false); 
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent form submission

    const loginResult = login(username, password);

    if (loginResult) {
      // Simulating a userId here, replace with actual logic if needed
      const userId = username; 
      setLoginId(userId)
      setCurrentUser({ id: userId });
      setLoginSuccess(true); 
      setShowPopup(true);   
    }
  };

  const handlePopupClose = () => {
    setShowPopup(false);

    if (loginSuccess) {
      setIsAuthenticated(true);
      navigate('/greeting'); // Redirect to the greeting page
    }
  };
  React.useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, []);

  const popupStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const popupContentStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center',
    width: '300px',
  };


  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          ref={usernameRef}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          ref={passwordRef}
        />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>

      {showPopup && (
        <div style={popupStyle}>
          <div style={popupContentStyle}>
            <h3>Welcome!</h3>
            <p>Login ID: {loginId}</p>
            <button onClick={handlePopupClose}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
