import React from 'react';

import style from './Header.css';
import logo from '../../assets/logo.svg';
import arrow from '../../assets/arrow.svg';

const header = (props) => {
  return (
    <div>
      <div className={style.container}>
        <img className={style.logo} src={logo} alt='James Lester' />
      </div>
      <img className={style.arrow} src={arrow} alt='James Lester' onClick={props.clicked} />
    </div>
  );
};

export default header;
