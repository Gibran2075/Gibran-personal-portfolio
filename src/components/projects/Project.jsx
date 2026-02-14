import React from "react";
import "./styles/project.css";

const Project = ({ image, title, description, github, demo }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>

      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        <div className="project-buttons">
          <a href={github} target="_blank" rel="noreferrer" className="btn btn-github">
            GitHub
          </a>
          <a href={demo} target="_blank" rel="noreferrer" className="btn btn-demo">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;