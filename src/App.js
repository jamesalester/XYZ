import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import animateScrollTo from 'animated-scroll-to';

import Header from './components/Header/Header';
import Page from './containers/Page/Page.js';

class App extends Component {

  // pageUp = () => {
  //   console.log('PageUp');
  //   animateScrollTo(0);
  // }

  pageDown = () => {
    console.log('PageDown');
    animateScrollTo(window.innerHeight, {speed: 5000});
  }

  render() {
    return (
      <div>
        <Header clicked={this.pageDown} />
        <Waypoint
          onEnter={this.pageDown}
        />
        <Page isDevWork />
        <Page />
      </div>
    );
  }
}

export default App;
