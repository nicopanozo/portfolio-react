// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Nicolas Panozo</h1>
        <nav className="space-x-4">
          <a href="#about" className="text-white hover:text-blue-300">About</a>
          <a href="#projects" className="text-white hover:text-blue-300">Projects</a>
          <a href="#contact" className="text-white hover:text-blue-300">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
