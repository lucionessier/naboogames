// En app.js importo los components que voy a utilizar, en un principio solamente el Navbar con los estilos de app.js en un archivo CSS

import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection"

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Navbar />
      <HeroSection/>
    </div>
  );
}

export default App;
