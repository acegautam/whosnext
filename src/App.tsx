import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "@fontsource/amatic-sc";
import './App.css';
import Board from './components/Board/Board';

function App() {
  return (
    <div className='App'>
      <div className='header'>Who's Next?</div>
      <main className='app-content'>
        <Board />
      </main>
    </div>
  );
}

export default App;
