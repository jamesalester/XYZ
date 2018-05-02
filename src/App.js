import React, { Component } from 'react';

import Header from './components/Header/Header';
import Page from './containers/Page/Page.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Page isDevWork />
        <Page />
      </div>
    );
  }
}

export default App;
