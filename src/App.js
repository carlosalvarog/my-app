import logo from './Marca_inicio_white.png';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         BIENVENIDO
        </p>
        <a
          className="App-link"
          href="http://www.inteleen.com"
          target="http://www.inteleen.com"
          rel="noopener noreferrer"
        >
          DISFRUTA
        </a>
      </header>
    </div>
  );
}

export default App;
