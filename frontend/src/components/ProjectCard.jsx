// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ title, description, imageSrc, projectLink }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Imagen del proyecto */}
      <a href={projectLink} target="_blank" rel="noopener noreferrer">
        <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      </a>
      {/* Título y descripción */}
      <div className="p-4">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
