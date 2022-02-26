import React, { useState } from 'react';
import './App.css';
import '@fontsource/vt323';

function App() {
  const [name, setName] = useState('');
  const [newName, setNewName] = useState('');
  const [error, setError] = useState('');
  const [gameState, setGameState] = useState(false);

  function validateLogin() {
    const loginValue = localStorage.getItem(name);
    if (loginValue == null) {
      setError('User does not exist');
      setGameState(false);
    } else {
      setError('');
      setGameState(true);
    }
  }

  function validateSignup() {
    const signupValue = localStorage.getItem(newName);
    if (signupValue != null) {
      setError('User already exists');
      setGameState(false);
    } else {
      setError('');
      setGameState(true);
      localStorage.setItem(newName, '0');
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <header className="Top-header">
          Guess the Celebrity
        </header>
        <header className="Bottom-header">
          <p>
            Made by: Kat and Esther
          </p>
        </header>
        <form>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Username" />
          <button type="submit" className="Login-button" onClick={validateLogin}>Log In</button>
        </form>
        <div className="Error" value={error}> </div>
        <form>
          <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Enter New Username" />
          <button type="submit" className="Login-button" onClick={validateSignup}>Sign Up</button>
        </form>
      </header>
    </div>
  );
}

export default App;
