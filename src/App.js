import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Title from './Component/Title'
// import Player from './Component/Player'
import Scoreboard from './Component/Scoreboard'
import "./App.css"

function App() {
  return (
    <div className="App">
      <main>
        <Title content="ScoreBoard" />
       <b><Scoreboard /></b>
      </main>
      
    </div>
  );
}

export default App;
