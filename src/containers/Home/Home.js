import React from 'react';
import animateScrollTo from 'animated-scroll-to';

import Header from '../../components/Header/Header';
import Page from '../Page/Page';
import About from '../About/About';
import Footer from '../../components/Footer/Footer';

class Home extends React.Component {

  state = {
    isLogoHover: false
  }

  pageUp = () => {
    animateScrollTo(0);
  }

  pageDown = () => {
    animateScrollTo(window.innerHeight, {speed: 5000});
  }

  render() {
    return (
      <React.Fragment>
        <Header clicked={this.pageDown} />
        <Page isDevWork />
        <Page />
        <About />
        <Footer clicked={this.pageUp} />
      </React.Fragment>
    );
  }

}

export default Home;
