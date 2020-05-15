import React from "react";
import { Link } from "react-scroll";
import { Link as ReactLink } from "react-router-dom";

const ProjectBrief = () => {
  return (
    <section className="home-brief-card" id="projects">
      <h1>Project</h1>
      <p>Something</p>
      <ReactLink to="/projects">
        <button className="ui inverted large button">More</button>
      </ReactLink>
      <div className="next-page-icon">
        <Link to="contact" smooth={true} offset={0} duration={500}>
          <i className="huge arrow alternate circle down outline icon"></i>
        </Link>
      </div>
    </section>
  );
};

export default ProjectBrief;
