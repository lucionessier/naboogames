// En app.js importo los components que voy a utilizar, en un principio solamente el Navbar con los estilos de app.js en un archivo CSS

import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection"
import { TitleBackground } from './components/BgTitle/TitleBackground';
// import { TitleBackground , H2Title } from './components/BgTitle/TitleBackground';

function App() {
  return (
    <div className="App">

      <Navbar />
      <HeroSection/>
      {/* <TitleBackground>
          <H2Title>Bienvenidos y bienvenidas a su tienda #1 de videojuegos, jóvenes padawan!</H2Title>
      </TitleBackground> */}
      <TitleBackground greeting={"soy un greeting!"} name={"Lucio"} >

      </TitleBackground>
    </div>
  );
}

export default App;
