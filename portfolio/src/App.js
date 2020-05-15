import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";

const links = [
  {
    text: "home",
    path: "/#home",
    otherPath: "/home",
    icon: "large home icon"
  },
  {
    text: "about",
    path: "/#about",
    otherPath: "/about",
    icon: "large user outline icon"
  },
  {
    text: "projects",
    path: "/#projects",
    otherPath: "/projects",
    icon: "large code icon"
  },
  {
    text: "contact",
    path: "/#contact",
    otherPath: "/contact",
    icon: "large paper plane outline icon"
  }
];

const App = () => {
  return (
    <div className="app">
      <HashRouter>
        <div>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/about" component={AboutMeContainer} />
          <Route exact path="/projects" component={Project} />
          <div className="footage">
            <p>Copywrite 2020 by Lena Xiao</p>
          </div>
        </div>
      </HashRouter>
    </div>
  );
};

const HomeContainer = () => {
  return (
    <div>
      <NavBar links={links} />
      <Route path="/" exact component={Home} />
    </div>
  );
};

const AboutMeContainer = () => {
  return (
    <div>
      <Route path="/about" exact component={AboutMe} />
      <Route path="/" exact component={HomeContainer} />
    </div>
  );
};

export default App;
