import React from 'react';

import Brick from './Brick.js';

const brickBuilder = (props) => {
  return (
    <Brick
      id={props.id}
      title={props.title}
      description={props.description}
      widths={props.widths}
      height={props.height == null ? '300px' : props.height}
      innerBricks={props.innerBricks}
      image={props.image}
      textAttr={props.textAttr}
    />
  );
};

export default brickBuilder;
