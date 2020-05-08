import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Home from "./components/Home";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";

const App = () => {
  const links = [
    {
      text: "HOME",
      path: "/",
      icon: "large home icon"
    },
    {
      text: "ABOUT",
      path: "/about",
      icon: "large user outline icon"
    },
    {
      text: "PEOJECTS",
      path: "/projects",
      icon: "large code icon"
    },
    {
      text: "CONTACT",
      path: "/contact",
      icon: "large paper plane outline icon"
    }
  ];

  return (
    <div className="app">
      <BrowserRouter>
        <div>
          <NavBar links={links} background="#333" />
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={AboutMe} />
          <Route path="/projects" exact component={Project} />
          <Route path="/contact" exact component={Contact} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
