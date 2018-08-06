import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

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

  handleClick = () => {
    this.props.history.push(`/portfolio/${this.props.id}`);
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
        id={brick.id}
        title={brick.title}
        description={brick.description}
        widths={brick.widths}
        height={brick.height}
        innerBricks={brick.innerBricks}
        image={brick.image}
        textAttr={brick.textAttr}
      />
    ))

    const classes = innerBricks.length === 0 ? style.brick : style.brickWall;

    let textAttr = this.props.textAttr || {
      color: 'blue',
      alignment: ['left', 'center']
    }
    let textStyle = {
      color: textAttr.color,
      textAlign: textAttr.alignment[0]
    }

    let width = this.props.widths[0];
    if (this.state.width<576) {
      width = this.props.widths[3]
      textStyle = {...textStyle, textAlign: textAttr.alignment[1]}
    } else if (this.state.width<750) {
      width = this.props.widths[2]
      textStyle = {...textStyle, textAlign: textAttr.alignment[1]}
    } else if (this.state.width<1000) {
      width = this.props.widths[1]
      textStyle = {...textStyle, textAlign: textAttr.alignment[1]}
    };

    const height = this.state.width < 576 ? (this.props.innerBricks ? 600 : 200) : this.props.height
    const textDiv = this.props.title != null ? (
      <div className={style.textContainer}>
        <h1 style={textStyle}>{String(this.props.title).toUpperCase()}</h1>
        <p style={textStyle}>{this.props.description}</p>
      </div>
    ) : null;

    return (
      <div className={classes} style={{width: width, height: height}} onClick={this.props.id === 'bigBrick' ? null : this.handleClick}>
        {this.props.image != null ? <img className={style.image} alt={'James Lester\'s ' + this.props.title}  src={this.props.image} /> : null}
        {/* {textDiv} */}
        {innerBricks}
      </div>
    );
  }
}

export default withRouter(Brick);
