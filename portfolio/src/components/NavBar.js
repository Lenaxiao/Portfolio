import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = ({ links, background }) => {
  const [navExpand, setNavExpand] = useState(false); // use hook

  return (
    <nav
      className={`nav-bar ${navExpand ? "active" : ""}`}
      style={{ background }}
    >
      <div className="expand-icon-cell">
        <i
          className="large bars icon expand-icon"
          onClick={() => setNavExpand(!navExpand)}
        ></i>
      </div>
      <ul
        className={`nav-bar-list ${navExpand ? "active" : ""}`}
        style={{ background }}
      >
        {links.map((link, i) => {
          return (
            <li className="item" key={i}>
              <Link to={link.path}>
                <i className={link.icon}></i>
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
