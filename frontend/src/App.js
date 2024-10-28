import './App.css';
import React from 'react';
import Header from './components/Header';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="p-8">
        <About />
      </main>
    </div>
  );
}

export default App;
