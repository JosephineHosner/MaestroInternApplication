import React from 'react';
import './App.css';
import Logo from './Logo.js';
import LevelChoice from './LevelChoice';

/* This is the main/driver React file. Contains the logo, and the contents for choosing a level are called*/
/* Author: Josephine Hosner*/
function App() {
  return (
    <div className="App" >
      <header style={{backgroundColor: "#d8f9f6"}}>
        <Logo />
        <div style={{fontSize: "16pt"}}>
          Dice... Dots... Deduction... Do you have what it takes to crack the code?
        </div>
     </header>
     <LevelChoice />
    </div>
  );
}

export default App;
