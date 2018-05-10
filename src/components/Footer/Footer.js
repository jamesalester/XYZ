import React from 'react';

import logo from '../../assets/logo.svg';
import style from './Footer.css';

const footer = (props) => {

  return (
    <div className={style.container}>
      <div className={style.logoContainer}>
        <img
          className={style.logo}
          src={logo}
          alt='James Lester'
          onClick={props.clicked}
        />
      </div>
    </div>
  );
};

export default footer;
