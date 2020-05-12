import React, { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.jpg";

const WINDOW_SIZE_LIMIT1 = 1000;

const SideBarForm = ({ topics }) => {
  return (
    <nav className="side-bar-container">
      <ul className="side-bar">
        <img
          src={avatar}
          alt="avatar"
          className="side-bar-image"
          width="150"
          height="150"
        ></img>
        {topics.map(topic => (
          <li key={topic} className={topic}>
            <Link to="/somwhere">{topic}</Link>
          </li>
        ))}
        <div className="link-out">
          <i className="huge github icon"></i>
          <i className="huge linkedin icon"></i>
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
      <div className={`header-bar-menu ${isExpand ? "" : "hidden"}`}>
        <div>
          <ul>
            {topics.map(topic => (
              <li
                key={topic}
                className={topic}
                onClick={() => setIsExpand(!isExpand)}
              >
                <Link to="/somwhere">{topic}</Link>
              </li>
            ))}
          </ul>
          <div className="link-out">
            <i className="huge github icon"></i>
            <i className="huge linkedin icon"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

const SideBar = ({ topics }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [sideBar, setSideBar] = useState(
    window.innerWith >= WINDOW_SIZE_LIMIT1
  );

  useLayoutEffect(() => {
    if (width < WINDOW_SIZE_LIMIT1) {
      setSideBar(false);
    } else {
      setSideBar(true);
    }
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () =>
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
  }, [width, setWidth]);

  if (sideBar) {
    return <SideBarForm topics={topics} />;
  } else {
    return <HeaderBarForm topics={topics} />;
  }
};

export default SideBar;
