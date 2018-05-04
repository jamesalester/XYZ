import React from 'react';

import Brick from './Brick.js';

const brickBuilder = (props) => {
  return (
    <Brick
      title={props.title}
      description={props.description}
      width={props.width}
      height={props.height == null ? '300px' : props.height}
      innerBricks={props.innerBricks}
    />
  );
};

export default brickBuilder;
