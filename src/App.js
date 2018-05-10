import React, { Component } from 'react';
import animateScrollTo from 'animated-scroll-to';

import Header from './components/Header/Header';
import Page from './containers/Page/Page.js';
import About from './containers/About/About.js';
import Footer from './components/Footer/Footer.js';

class App extends Component {

  state = {
    isLogoHover: false
  }

  pageUp = () => {
    console.log('PageUp');
    animateScrollTo(0);
  }

  pageDown = () => {
    console.log('PageDown');
    animateScrollTo(window.innerHeight, {speed: 5000});
  }

  render() {
    return (
      <div>
        <Header clicked={this.pageDown} />
        <Page isDevWork />
        <Page />
        <About />
        <Footer clicked={this.pageUp} />
      </div>
    );
  }
}

export default App;
