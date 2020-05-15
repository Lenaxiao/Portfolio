import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { Link } from "react-scroll";

const NavBar = ({ links }) => {
  const [navExpand, setNavExpand] = useState(false); // use hook
  const ref = useRef(); // this is for closing the expanded navbar

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      // clean up previous event-listener to prevent memory leak
      document.removeEventListener("mousedown", handleClick);
    };
  });

  const handleClick = e => {
    if (ref.current.contains(e.target)) {
      setNavExpand(!navExpand);
      return;
    }
    setNavExpand(false);
  };

  return (
    <nav className="nav-bar">
      <div className="expand-icon-cell">
        {!navExpand ? (
          <i className="large bars icon expand-icon" ref={ref}></i>
        ) : (
          <i className="large close icon expand-icon dive-in" ref={ref}></i>
        )}
      </div>
      <ul className={`nav-bar-list ${navExpand ? "active" : ""}`}>
        {links.map((link, i) => (
          <li className="item" key={i}>
            <Link to={link.text} smooth={true} offset={0} duration={500}>
              <i className={link.icon} />
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
