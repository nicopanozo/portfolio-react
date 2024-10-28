// src/components/Projects.jsx
import React from 'react';

// Datos de ejemplo para los proyectos
const projectList = [
  {
    title: 'Portafolio Personal',
    description: 'Un sitio web para mostrar mis habilidades y proyectos.',
    demoLink: '#', // Aquí puedes colocar el enlace a una demo o repositorio
    codeLink: '#'
  },
  {
    title: 'Aplicación de Tareas',
    description: 'App para gestionar tareas utilizando React y Node.js.',
    demoLink: '#',
    codeLink: '#'
  },
  {
    title: 'Blog con Markdown',
    description: 'Blog desarrollado en Node.js donde los artículos están escritos en Markdown.',
    demoLink: '#',
    codeLink: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                {project.demoLink && (
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    Demo
                  </a>
                )}
                {project.codeLink && (
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    Código
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
