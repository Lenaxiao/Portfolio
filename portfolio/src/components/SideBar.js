import React, { useLayoutEffect, useState } from "react";
import { Link } from "react-scroll";
import { Link as ReactLink } from "react-router-dom";
import avatar from "../assets/avatar.jpg";

const WINDOW_SIZE_LIMIT1 = 1000;

const SideBarForm = ({ topics }) => {
  return (
    <nav className="side-bar-container">
      <div className="back-to-home">
        <ReactLink to="/">Back To Home</ReactLink>
      </div>
      <ul className="side-bar">
        <img
          src={avatar}
          alt="avatar"
          className="side-bar-image"
          width="150"
          height="150"
        ></img>
        {topics.map(topic => (
          <li key={topic}>
            <Link
              activeClass="side-bar-active"
              to={topic}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              {topic}
            </Link>
          </li>
        ))}
        <div className="link-out">
          <a
            target="_blank"
            href="https://github.com/Lenaxiao"
            rel="noopener noreferrer"
          >
            <i className="huge github icon"></i>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/sijia-xiao-359760150/"
            rel="noopener noreferrer"
          >
            <i className="huge linkedin icon"></i>
          </a>
        </div>
      </ul>
    </nav>
  );
};

const HeaderBarForm = ({ topics }) => {
  const [isExpand, setIsExpand] = useState(false);
  let icon;
  if (!isExpand) {
    icon = <i className="big bars icon" />;
  } else {
    icon = <i className="big close icon dive-in"></i>;
  }
  return (
    <nav className="header-bar-container">
      <div className="header-bar-icon" onClick={() => setIsExpand(!isExpand)}>
        {icon}
      </div>
      <div className="header-bar-icon home">
        <ReactLink to="/">
          <i className="big home icon" />
        </ReactLink>
      </div>
      <div className={`header-bar-menu ${isExpand ? "" : "hidden"}`}>
        <div>
          <ul>
            {topics.map(topic => (
              <li key={topic} onClick={() => setIsExpand(!isExpand)}>
                <Link
                  activeClass="side-bar-active"
                  to={topic}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  {topic}
                </Link>
              </li>
            ))}
          </ul>
          <div className="link-out">
            <a
              target="_blank"
              href="https://github.com/Lenaxiao"
              rel="noopener noreferrer"
            >
              <i className="huge github icon"></i>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/sijia-xiao-359760150/"
              rel="noopener noreferrer"
            >
              <i className="huge linkedin icon"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const SideBar = ({ topics }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () =>
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
  });

  if (width >= WINDOW_SIZE_LIMIT1) {
    return <SideBarForm topics={topics} />;
  } else {
    return <HeaderBarForm topics={topics} />;
  }
};

export default SideBar;
