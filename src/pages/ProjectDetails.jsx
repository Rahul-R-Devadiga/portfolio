import React from "react";
import { ListofProjectDetails } from "../utils/mockData";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { workId } = useParams();
  const projectInfo = ListofProjectDetails[workId];

  if (!projectInfo) {
    return <div className="p-10">Project not found.</div>;
  }

  return <div>ProjectDetails {projectInfo.name}</div>;
};

export default ProjectDetails;
