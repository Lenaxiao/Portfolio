import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const ProjectBrief = () => {
  return (
    <section className="home-brief-card" id="projects">
      <h1>Project</h1>
      <p>Something</p>
      <button className="ui inverted large button">More</button>
      <div className="next-page-icon">
        <Link smooth to="/#contact">
          <i className="huge arrow alternate circle down outline icon"></i>
        </Link>
      </div>
    </section>
  );
};

export default ProjectBrief;
