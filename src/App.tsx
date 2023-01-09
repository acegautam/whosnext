import React from 'react';
import './App.css';
import Board from './Board/Board';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>Who's next?</header>
      <main className='app-content'>
        <Board />
      </main>
    </div>
  );
}

export default App;
