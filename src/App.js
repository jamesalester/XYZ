import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./containers/Home/Home";
import Project from "./containers/Project/Project";
import ScrollToTop from "./hoc/ScrollToTop";

class App extends Component {
  render() {
    return (
      <ScrollToTop>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/portfolio/:project" exact component={Project} />
        </Switch>
      </ScrollToTop>
    );
  }
}

export default App;
