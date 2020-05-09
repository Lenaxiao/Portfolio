import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

const App = () => {
  const links = [
    {
      text: "home",
      path: "/#home",
      icon: "large home icon"
    },
    {
      text: "about",
      path: "/#about",
      icon: "large user outline icon"
    },
    {
      text: "projects",
      path: "/#projects",
      icon: "large code icon"
    },
    {
      text: "contact",
      path: "/#contact",
      icon: "large paper plane outline icon"
    }
  ];

  return (
    <div className="app">
      <BrowserRouter>
        <div>
          <NavBar links={links} />
          <Route path="/" exact component={Home} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
