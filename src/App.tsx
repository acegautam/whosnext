import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/amatic-sc';
import './App.css';
import Board from './components/Board/Board';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <main className='app-content'>
        <Board />
      </main>
      <Footer />
    </div>
  );
}

export default App;
