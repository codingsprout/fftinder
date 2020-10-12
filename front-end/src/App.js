import React from 'react';
import './App.css';
import BotButton from './components/BotButton';
import Cards from './components/Cards';
import Header from './components/Header';

function App() {
  return (
    <div className="app">

      <Header />
      <Cards />
      <BotButton />
    </div>
  );
}

export default App;
