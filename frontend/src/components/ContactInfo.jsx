// src/components/ContactInfo.jsx
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <section id="contact" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contacto</h2>
        <p className="text-gray-700 mb-4">¡Conecta conmigo en las siguientes plataformas!</p>
        <div className="flex justify-center space-x-8">
          <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-700 transition duration-300">
            <FaLinkedin size={40} />
            <span className="block mt-2">LinkedIn</span>
          </a>
          <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition duration-300">
            <FaGithub size={40} />
            <span className="block mt-2">GitHub</span>
          </a>
          <a href="mailto:tu-correo@gmail.com" className="text-gray-700 hover:text-red-600 transition duration-300">
            <FaEnvelope size={40} />
            <span className="block mt-2">Correo</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
