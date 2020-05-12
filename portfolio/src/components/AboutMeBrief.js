import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const AboutMeBrief = ({topic, content}) => {
  return (
    <section className="home-brief-card" id="about">
      <h1>{topic}</h1>
      <p>{content}</p>
      <Link to="/about">
        <button className="ui inverted large button">More</button>
      </Link>
      <div className="next-page-icon">
        <HashLink smooth to="/#projects">
          <i className="huge arrow alternate circle down outline icon"></i>
        </HashLink>
      </div>
    </section>
  );
};

export default AboutMeBrief;
