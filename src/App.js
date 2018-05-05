import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

import Header from './components/Header/Header';
import Page from './containers/Page/Page.js';

class App extends Component {

  pageUp = () => {
    console.log('PageUp');
    window.scrollTo(0, 0);
  }

  pageDown = () => {
    console.log('PageDown');
    window.scrollTo(0, window.innerHeight+10);
  }

  render() {
    return (
      <div>
        <Header />
        <Waypoint
          onEnter={this.pageUp}
          onLeave={this.pageDown}
        />
        <Page isDevWork />
        <Page />
      </div>
    );
  }
}

export default App;
