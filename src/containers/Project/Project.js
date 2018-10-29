import React from "react";
import { withRouter } from "react-router-dom";

import style from "./Project.css";
import data from "../../resources/bricks";

import Footer from "../../components/Footer/Footer";

class Project extends React.Component {
  componentWillMount() {
    this.projectID = this.props.match.params["project"];
    this.project = data[this.projectID];
  }

  goToHome = () => {
    this.props.history.push(`/`);
  };

  render() {
    // const imageArray = [];
    // for ( let image in this.project.images ) {
    //     imageArray.push( {
    //         ...this.props.innerBricks[brick],
    //         id: brick
    //     } );
    // }

    var images = null;
    if (this.project.images) {
      images = this.project.images.map((image, index) => {
        return this.project.links ? (
          <a href={this.project.links[index]} target="_ blank">
            <img
              className={style.headerImage}
              src={image}
              alt={this.project.title}
            />
          </a>
        ) : (
          <img
            className={style.headerImage}
            src={image}
            alt={this.project.title}
          />
        );
      });
    }

    var codeBlock = null;
    if (this.project.code) {
      codeBlock = (
        <iframe
          title="Snakes and Ladders"
          className={style.codeBlock}
          height="600px"
          width="100%"
          src={this.project.code}
          scrolling="no"
          frameborder="no"
          allowtransparency="true"
          allowfullscreen="true"
          sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      );
    }

    // images.shift()

    return (
      <div className={style.container}>
        <div className={style.headerContainer}>
          <div className={style.titleContainer}>
            <h1 className={style.heading}>{this.project.title}</h1>
            <div className={style.underline} />
          </div>
          <div className={style.infoContainer}>
            <p>{this.project.description}</p>
          </div>
        </div>
        {/* <img className={style.headerImage} src={this.project.images[0]} /> */}
        {images}
        {codeBlock}
        <Footer clicked={this.props.history.goBack} return />
      </div>
    );
  }
}

export default withRouter(Project);
