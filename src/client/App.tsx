import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {sum} from "../core/math";
import {getTasks} from "../core/functions/functions";

function App() {

  const [serverResult, setServerResult] = useState(null);
  useEffect(() => {
    (async () => {
      const result = await getTasks()
      console.log(result)
      setServerResult(result.data)
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Client result {sum(1, 3)}</p>
        <p>Server result {serverResult}</p>
      </header>
    </div>
  );
}

export default App;
