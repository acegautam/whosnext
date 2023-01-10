import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import Board from './components/Board/Board';

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
