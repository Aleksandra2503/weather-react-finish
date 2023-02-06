import React from "react";
import Weather from "./weather";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          !!!Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>HELLO</h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Weather city="Murnau"/>
      </header>
    </div>
  );
}

export default App;
