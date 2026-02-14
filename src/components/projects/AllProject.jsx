import React from "react";
import Project from "./Project";
import INFO from "../../data/user";

import "./styles/allProject.css";

const AllProject = () => {
  return (
    <div className="all-projects-section" id="Projects">
      <h2 className="projects-section-title">My Projects</h2>

      <div className="all-projects-container">
        {INFO.projects.map((project, index) => (
          <Project
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            github={project.github}
            demo={project.demo}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProject;