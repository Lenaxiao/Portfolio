import React from "react";
import DotEffect from "./DotEffect";
import ProjectCard from "./ProjectCard";
import { content } from "./data";
import { Link } from "react-router-dom";

const Project = () => {
  const { projects } = content;
  return (
    <div className="project">
      <div className="intro-page">
        <div className="project-canvas">
          <DotEffect />
        </div>
        <div className="project-main">
          <h1>All Those Stunning Projects Waited To Be Seen...</h1>
          <p>Hard-Working | Passionate | Fun</p>
        </div>
      </div>
      <div className="content-page">
        <div className="card-list">
          {projects.map(project => {
            return (
              <ProjectCard
                key={project.name}
                year={project.year}
                content={project.description}
                name={project.name}
                link={project.link}
                category={project.category}
              />
            );
          })}
        </div>
      </div>
      <div className="footage">
        <Link to="/">
          <i className="big home icon"></i>
        </Link>
        <p>Copywrite 2020 by Lena Xiao</p>
      </div>
    </div>
  );
};

export default Project;
