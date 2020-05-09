import React from "react";

const HomeBriefCard = ({ text, description }) => {
  return (
    <section className="home-brief-card" id={text}>
      <h1>{text}</h1>
      <p>{description}</p>
      <button className="ui inverted large button">More</button>
    </section>
  );
};

export default HomeBriefCard;
