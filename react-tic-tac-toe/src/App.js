import React from 'react';
import './App.css';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React tic-tac-toe</h1>        
        <section>
          <Game/>
        </section>
      </header>
    </div>
  );
}

export default App;
