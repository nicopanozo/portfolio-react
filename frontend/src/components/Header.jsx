// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Mi Portafolio</h1>
        <nav className="space-x-4">
          <a href="#about" className="text-white hover:text-blue-300">Sobre mí</a>
          <a href="#projects" className="text-white hover:text-blue-300">Proyectos</a>
          <a href="#contact" className="text-white hover:text-blue-300">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
