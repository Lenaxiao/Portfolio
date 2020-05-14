import React from "react";

const ProjectCard = ({ year, name, content, link, category }) => {
  const colors = ["#85A2A6", "#D9A6A3", "#a5bd9b", "#538579", "#6F5A8C"];
  return (
    <div className="card">
      <div className="outlook outlook1">
        <ul className="content">
          {content.map((value, i) => {
            return <li key={i}>{value}</li>;
          })}
        </ul>
      </div>
      <div
        className="outlook outlook2"
        style={{ background: colors[Math.floor(Math.random() * 3)] }}
      >
        <h2>{year}</h2>
        <h3>{name}</h3>
        <button type="button">
          <a href={link}>To GitHub</a>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
