import React from 'react';

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const brick = (props) => {

  return (
    <div style={{width: props.width, height: props.height, backgroundColor: getRandomColor()}}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );

};

export default brick;
