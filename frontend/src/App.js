// src/App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="p-8">
        <About />
        <Projects />
      </main>
    </div>
  );
}

export default App;
