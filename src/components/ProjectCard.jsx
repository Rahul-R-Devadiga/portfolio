import React from "react";

const ProjectCard = ({ project }) => {
  return (
    // Outer div for margin and hover scale effect
    <div className="m-6 max-w-[640px] w-full transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="rounded-2xl overflow-hidden shadow-lg">
        {/* Project Cover Image */}
        <div className="aspect-[16/9] w-full">
          <img
            src={project.coverImage}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text container with name and tagline */}
        <div className="bg-gray-800 text-white text-center p-3">
          <div className="flex items-center justify-center">
            <div className="flex-grow border-t border-gray-400" />
            <h2 className="mx-3 text-lg font-semibold">{project.name}</h2>
            <div className="flex-grow border-t border-gray-400" />
          </div>
          
          <div className="flex items-center justify-center mt-2">
            <div className="flex-grow border-t border-gray-400" />
            <p className="mx-3 text-sm">{project.tagline}</p>
            <div className="flex-grow border-t border-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
