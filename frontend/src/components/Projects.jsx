// src/components/Projects.jsx
import React from 'react';
import ProjectCard from './ProjectCard';
import project2Image from '../assets/images/project2.jpg';
import phpStore2 from '../assets/images/phpStore2.png';
import ollamaTools from '../assets/images/ollamaTools.png';
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.section
    id="projects"
      className="py-12 bg-gray-100"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
    <section id="projects" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="PHP, Yii2 and MySQL Stock Management Web App for Clothing Store"
            description="PHP application using Yii and MySQL to streamline retail operations. Features include user management, product catalog, sales tracking, and real-time inventory updates."
            imageSrc={phpStore2}
            projectLink="https://github.com/nicopanozo/tienda-php.git"
          />
          <ProjectCard
            title="Ollama AI: functions as tools for LLM’s"
            description="This AI project provides a comprehensive guide and code examples for leveraging Ollama's function calling feature. Discover how to extend the capabilities of your language models by allowing them to interact with external tools and data sources."
            imageSrc={ollamaTools}
            projectLink="https://github.com/nicopanozo/ollama-functions-as-tools.git"
          />
          
          {/* Puedes agregar más ProjectCards aquí */}
        </div>
      </div>
    </section>
    </motion.section>
  );
};

export default Projects;
