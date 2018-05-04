import React from 'react';

import BrickBuilder from './BrickBuilder.js';
import style from './Brick.css';

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const brick = (props) => {

  const innerBrickArray = [];
  for ( let brick in props.innerBricks ) {
      innerBrickArray.push( {
          ...props.innerBricks[brick],
          id: brick
      } );
  }

  let innerBricks = innerBrickArray.map( brick => (
    <BrickBuilder
      title={brick.title}
      description={brick.description}
      width={brick.width}
      height={brick.height}
      innerBricks={brick.innerBricks}
    />
  ))

  // let image = null;
  //
  // switch (props.title) {
  //   case 'SFere':
  //     image = sfereImage;
  //     break;
  //   default: break;
  //
  // }

  const classes = innerBricks.length == 0 ? style.brick : style.brickWall;

  return (
    <div className={classes} style={{width: props.width, height: props.height, backgroundColor: getRandomColor()}}>
      {props.image != null ? <img className={style.image} src={props.image} /> : null}
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      {innerBricks}
    </div>
  );

};

export default brick;
