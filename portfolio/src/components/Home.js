import React from "react";
import { Link } from "react-router-dom";
import HomeBrief from "./HomeBrief";
import AboutMeBrief from "./AboutMeBrief";
import ProjectBrief from "./ProjectBrief";
import ContactBrief from "./ContactBrief";
import image from "../assets/photo-1547954575-855750c57bd3.jpeg";

const Home = () => {
  return (
    <div className="home-container">
      <img id="home-bg" src={image} alt="background" />
      <HomeBrief words={["Hello", "Have Fun"]} />
      <AboutMeBrief
        topic="Who Am I ?"
        content="A programmer who is experienced in web design and machine learning."
      />
      <ProjectBrief />
      <ContactBrief />
      <div className="footage">
        <Link to="/">
          <i className="big home icon"></i>
        </Link>
        <p>Copywrite 2020 by Lena Xiao</p>
      </div>
    </div>
  );
};

export default Home;
