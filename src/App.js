import React, { useState } from 'react';
import Login from './Login';

function App() {
  const [running, setRunning] = useState(false);

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
        <Login start={running} setStart={setRunning} />
      </header>
    </div>
  );
}

export default App;
