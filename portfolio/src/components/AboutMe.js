import React from "react";
import SideBar from "./SideBar";
import AboutCard from "./AboutCard";
import { ProgressBarWrap } from "./ProgressBar";
import { content } from "./data.js";

const AboutMe = () => {
  const { person, education, experience, skills } = content;

  return (
    <div className="about-me-container">
      <SideBar topics={content.topics} />
      <div className="about-me-page">
        <section className="about-me-content summary">
          <div>
            <p className="name">
              <span className="firstname">{person.firstname} </span>
              <span className="lastname">{person.lastname}</span>
            </p>
            <p className="email">{person.email}</p>
            <p className="bio">{person.bio}</p>
          </div>
        </section>
        <section className={`about-me-content education`}>
          <p className="topic">education</p>
          <div>
            {education.map((value, i) => {
              const {
                university,
                degree,
                major,
                gpa,
                start,
                end,
                courses
              } = value;
              return (
                <AboutCard
                  key={i}
                  topic={university}
                  option={degree}
                  content={major}
                  detail={courses}
                  additional={gpa}
                  start={start}
                  end={end}
                />
              );
            })}
          </div>
        </section>
        <section className="about-me-content skills">
          <p className="topic">Skills</p>
          <div className="skills-container">
            {Object.entries(skills).map(([key, value], indx) => {
              return (
                <ProgressBarWrap key={indx} category={key} value={value} />
              );
            })}
          </div>
        </section>
        <section className="about-me-content experience">
          <p className="topic">Experience</p>
          <div>
            {experience.map((value, i) => {
              const { project, role, start, end, content } = value;
              return (
                <AboutCard
                  key={i}
                  topic={project}
                  option={role}
                  detail={content}
                  start={start}
                  end={end}
                />
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
