import React, { Component } from 'react';

import { snakesAndLaddersBrick } from '../../resources/bricks';
import Brick from '../../components/Brick/Brick.js';

import style from './About.css';

class About extends React.Component {

  render() {

    const brickArray = [];
    for ( let brick in snakesAndLaddersBrick ) {
        brickArray.push( {
            ...snakesAndLaddersBrick[brick],
            id: brick
        } );
    }

    let bricks = brickArray.map( brick => (
      <Brick
        key={brick.id}
        id={brick.id}
        title={brick.title}
        description={brick.description}
        widths={brick.widths}
        height={brick.height == null ? '300px' : brick.height}
        innerBricks={brick.innerBricks}
        image={brick.image}
        textAttr={brick.textAttr}
      />
    ))

    return (
      <div>
        <h1 className={style.heading}>About Me</h1>
        <div className={style.brickWall}>
          <div className={style.halfbrick}>
            <div className={style.about}>
              <a href='mailto:james@jameslester.xyz'>
                <h2>james@</h2>
                <h2>jameslester.xyz</h2>
              </a>

              <p>My passion is developing apps and websites. I am a co-founder at Arcitux, a London based digital agency and specialise in Swift and React. I would love to hear from you.</p>
            </div>
            {bricks}
          </div>
          <div className={style.contact}></div>
        </div>
      </div>
    );
  }
}

export default About;
