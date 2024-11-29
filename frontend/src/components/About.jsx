import React from 'react';
import nico from '../assets/images/nico.jpg';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      className="bg-gradient-to-r from-blue-50 to-gray-100 py-16"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Columna de Imagen */}
          <div className="flex-shrink-0 text-center md:text-left">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg mx-auto md:mx-0">
              <img
                src={nico}
                alt="Nicolas Panozo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Columna de Texto */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
            I'm Nicolas Panozo, a passionate web developer with experience in both personal and professional projects. My technical skills include:

            Web development: Angular, React JS, Tailwind CSS, Node JS, PHP, Yii2
            Databases: PostgreSQL, MySQL
            Other: Python, Artificial Intelligence, LLMs, Chatbots
            During my internship at Assuresoft, I had the opportunity to apply my knowledge to real-world projects. As a research assistant, I'm currently exploring the latest trends in artificial intelligence. My portfolio showcases a variety of projects that demonstrate my ability to build robust and scalable web applications.
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Skills</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Full-stack development with React, Tailwind CSS, Node.js, and Express</li>
                <li>Backend development with PHP (Yii2) and MySQL</li>
                <li>Database management with PostgreSQL and MySQL</li>
                <li>Python programming with a focus on AI and machine learning</li>
                <li>AI technologies: LLMs, chatbots, natural language processing</li>
              </ul>
            </div>

            {/* Botón Descargar CV */}
            <a
              href="/CV-2024-NP.pdf"
              download="CV-Nicolas-Panozo-2024"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300"
            >
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
