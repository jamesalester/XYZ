import React, { Component } from 'react';

import Brick from '../../components/Brick/Brick.js';
import { developmentBricks, productDesignBricks } from '../../resources/bricks.js';

import style from './Page.css';

class Page extends Component {

  render() {

    const devBrickArray = [];
    for ( let brick in developmentBricks ) {
        devBrickArray.push( {
            ...developmentBricks[brick],
            id: brick
        } );
    }

    let devBricks = devBrickArray.map( brick => (
      <Brick
        key={brick.id}
        title={brick.title}
        description={brick.description}
        widths={brick.widths}
        height={brick.height == null ? '300px' : brick.height}
        innerBricks={brick.innerBricks}
        image={brick.image}
      />
    ))

    const pdBrickArray = [];
    for ( let brick in productDesignBricks ) {
        pdBrickArray.push( {
            ...productDesignBricks[brick],
            id: brick
        } );
    }

    let pdBricks = pdBrickArray.map( brick => (
      <Brick
        key={brick.id}
        title={brick.title}
        description={brick.description}
        widths={brick.widths}
        height={brick.height == null ? '300px' : brick.height}
        innerBricks={brick.innerBricks}
        image={brick.image}
      />
    ))

    return (
      <React.Fragment>
        <h1 className={style.heading}>{this.props.isDevWork ? 'Development Work' : 'Product Design'}</h1>
        <div className={style.brickWall}>
          {this.props.isDevWork ? devBricks : pdBricks}
        </div>
      </React.Fragment>
    );
  }
}

export default Page;
