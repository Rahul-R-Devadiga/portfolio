import React from "react";

const ProjectCard = ({ project }) => {
  return (
    // Outer div for margin and hover scale effect
    <div className="project-card-container">
      <div className="project-card">

        {/* Project Cover Image */}
        <div className="project-image-wrapper">
          <img
            src={project.coverImage}
            alt={project.name}
            className="project-image"
          />
        </div>

        {/* Text container */}
        <div className="project-card-footer">
          {/* Title and divider */}
          <div className="flex items-center justify-center">
            <div className="project-card-divider" />
            <h2 className="mx-3 project-card-title">{project.name}</h2>
            <div className="project-card-divider" />
          </div>
          
          {/* Tagline with divider */}
          <div className="flex items-center justify-center mt-2">
            <div className="project-card-divider" />
            <p className="mx-3 project-card-tagline">{project.tagline}</p>
            <div className="project-card-divider"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
