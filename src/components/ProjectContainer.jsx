import React from "react";
import { ListofProjectDetails, projectCards } from "../utils/mockData";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

const ProjectContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
      {projectCards.map((project) => (
        <Link key={project.id} to={"/work/" + project.id}>
          <ProjectCard project={project} key={project.id} />
        </Link>
      ))}
    </div>
  );
};

export default ProjectContainer;
