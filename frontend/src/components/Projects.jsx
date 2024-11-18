// src/components/Projects.jsx
import React from 'react';
import ProjectCard from './ProjectCard';
import project1Image from '../assets/images/project1.jpg';
import project2Image from '../assets/images/project2.jpg';
import phpStore from '../assets/images/phpStore.png';
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
            title="Manejo de inventario en PHP con MySQL"
            description="Sistema de manejo de inventario en PHP con MySQL. Sistema CRUD completo para manejo de productos, stock, ventas y usuarios."
            imageSrc={phpStore}
            projectLink="https://github.com/nicopanozo/tienda-php.git"
          />
          <ProjectCard
            title="Proyecto 2"
            description="Descripción breve del proyecto 2."
            imageSrc={project1Image}
            projectLink="https://enlace-al-proyecto2.com"
          />
          <ProjectCard
            title="Proyecto 2"
            description="Descripción breve del proyecto 2."
            imageSrc={project2Image}
            projectLink="https://enlace-al-proyecto2.com"
          />
          <ProjectCard
            title="Proyecto 2"
            description="Descripción breve del proyecto 2."
            imageSrc={project2Image}
            projectLink="https://enlace-al-proyecto2.com"
          />
          <ProjectCard
            title="Proyecto 2"
            description="Descripción breve del proyecto 2."
            imageSrc={project2Image}
            projectLink="https://enlace-al-proyecto2.com"
          />
          <ProjectCard
            title="Proyecto 2"
            description="Descripción breve del proyecto 2."
            imageSrc={project2Image}
            projectLink="https://enlace-al-proyecto2.com"
          />
          
          {/* Puedes agregar más ProjectCards aquí */}
        </div>
      </div>
    </section>
    </motion.section>
  );
};

export default Projects;
