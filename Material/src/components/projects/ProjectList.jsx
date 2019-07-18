import React from "react";
import ProjectSummary from "./ProjectSummary.jsx";

const ProjectList = ({ projects, props }) => {
  return (
    <div className="project-list section">
      {projects &&
        projects.map(project => {
          return (
            <div key={project.id}>
              <ProjectSummary project={project} props={props} />
            </div>
          );
        })}
    </div>
  );
};

export default ProjectList;
