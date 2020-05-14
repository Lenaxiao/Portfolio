import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const ProjectBrief = () => {
  return (
    <section className="home-brief-card" id="projects">
      <h1>Project</h1>
      <p>Something</p>
      <Link to="/projects">
        <button className="ui inverted large button">More</button>
      </Link>
      <div className="next-page-icon">
        <HashLink smooth to="/#contact">
          <i className="huge arrow alternate circle down outline icon"></i>
        </HashLink>
      </div>
    </section>
  );
};

export default ProjectBrief;
