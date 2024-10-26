import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="p-8">
        <h2 className="text-xl">Bienvenido a mi portafolio</h2>
      </main>
    </div>
  );
}

export default App;
