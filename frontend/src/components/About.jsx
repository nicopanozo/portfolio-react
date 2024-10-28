// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Sobre mí</h2>
        <p className="text-gray-700 leading-relaxed">
          Soy un desarrollador apasionado con experiencia en tecnologías como React, Node.js, y PostgreSQL. Mi objetivo es crear soluciones web efectivas y amigables para los usuarios. Me interesa aprender y aplicar las mejores prácticas de desarrollo para ofrecer resultados de alta calidad.
        </p>
        <div className="mt-4">
          <p className="text-gray-700">
            Habilidades clave:
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Desarrollo frontend con React y TailwindCSS</li>
            <li>Backend con Node.js y Express</li>
            <li>Gestión de bases de datos con PostgreSQL</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
