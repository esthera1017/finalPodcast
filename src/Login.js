import React, { useState } from 'react';
import './App.css';
import '@fontsource/vt323';
import PropTypes from 'prop-types';
import Question from './Question';
import validString from './validString';
import qlist from './questions.json';

function Login({ start, setStart }) {
  const [name, setName] = useState('');
  const [newName, setNewName] = useState('');
  const [error, setError] = useState('');

  function validateLogin(e) {
    const loginValue = localStorage.getItem(name);
    e.preventDefault();
    if (loginValue == null) {
      setError('User does not exist');
    } else {
      localStorage.setItem(name + '$', '0');
      setStart(true);
    }
  }

  function validateSignup(e) {
    const signupValue = localStorage.getItem(newName);
    e.preventDefault();
    if (signupValue != null) {
      setError('User already exists');
    } else if (!validString(newName)) {
      setError('Username must be alphanumeric');
    } else {
      localStorage.setItem(newName, '0');
      localStorage.setItem(newName + '$', '0');
      setStart(true);
    }
  }
  if (!start) {
  return (
  <>
    <form>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Username" />
      <button type="submit" className="Login-button" onClick={validateLogin}>Log In</button>
    </form>
    <div className="Error">
      {error}
    </div>
    <form>
      <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Enter New Username" />
      <button type="submit" className="Login-button" onClick={validateSignup}>Sign Up</button>
    </form>
  </>
  );
  }
  return <Question qlist={qlist} />;
}

Login.propTypes = {
  start: PropTypes.bool.isRequired,
  setStart: PropTypes.func.isRequired,
};

export default Login;
