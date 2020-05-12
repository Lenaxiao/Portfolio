import React from "react";
import HomeBrief from "./HomeBrief";
import AboutMeBrief from "./AboutMeBrief";
import ProjectBrief from "./ProjectBrief";
import ContactBrief from "./ContactBrief";

const Home = () => {
  return (
    <div className="home-container">
      <HomeBrief words={["Hello", "Have Fun"]} />
      <AboutMeBrief topic="Who Am I ?" content="A programmer who is experienced in web design and machine learning." />
      <ProjectBrief />
      <ContactBrief />
    </div>
  );
};

export default Home;
