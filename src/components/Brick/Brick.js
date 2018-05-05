import React, { Component } from 'react';

import BrickBuilder from './BrickBuilder.js';
import style from './Brick.css';

class Brick extends Component {

  state = {
    width: 0
  }

  constructor(props) {
    super(props);
    this.state = { width: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  render () {

    const innerBrickArray = [];
    for ( let brick in this.props.innerBricks ) {
        innerBrickArray.push( {
            ...this.props.innerBricks[brick],
            id: brick
        } );
    }

    let innerBricks = innerBrickArray.map( brick => (
      <BrickBuilder
        key={brick.id}
        title={brick.title}
        description={brick.description}
        widths={brick.widths}
        height={brick.height}
        innerBricks={brick.innerBricks}
        image={brick.image}
      />
    ))

    const classes = innerBricks.length === 0 ? style.brick : style.brickWall;

    let width = this.props.widths[0]
    if (this.state.width<1000) { width = this.props.widths[1] }
    else if (this.state.width<750) { width = this.props.widths[2] }
    else if (this.state.width<600) { width = this.props.widths[3] }

    console.log('Brick: ' + this.props.title);
    console.log('Screen Width: ' + this.state.width)
    console.log('Brick Width: ' + width)
    console.log('------------------');

    return (
      <div className={classes} style={{width: width, height: this.props.height}}>
        {this.props.image != null ? <img className={style.image} alt='James Lesters this.props.title'  src={this.props.image} /> : null}
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        {innerBricks}
      </div>
    );
  }
}

export default Brick;
