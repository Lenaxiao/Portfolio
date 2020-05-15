import React from "react";
import { Link } from "react-scroll";
import { Link as ReactLink } from "react-router-dom";

const AboutMeBrief = ({ topic, content }) => {
  return (
    <section className="home-brief-card" id="about">
      <h1>{topic}</h1>
      <p>{content}</p>
      <ReactLink to="/about">
        <button className="ui inverted large button">More</button>
      </ReactLink>
      <div className="next-page-icon">
        <Link to="projects" smooth={true} offset={0} duration={500}>
          <i className="huge arrow alternate circle down outline icon"></i>
        </Link>
      </div>
    </section>
  );
};

export default AboutMeBrief;
