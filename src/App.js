import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home/Home';
import Project from './containers/Project/Project';

class App extends Component {

  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/portfolio/:project" exact component={Project} />
      </Switch>
    );
  }
}

export default App;
