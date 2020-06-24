import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../assets/logo.svg';
import style from './Footer.module.css';

const Footer = (props) => {
	const { canReturn, clicked } = props;
	return (
		<div className={style.container}>
			<div className={canReturn ? style.returnContainer : style.logoContainer}>
				<img className={style.logo} src={logo} alt="James Lester" onClick={clicked} />
			</div>
		</div>
	);
};

Footer.propTypes = {
	clicked: PropTypes.func,
	canReturn: PropTypes.bool,
};
Footer.defaultProps = {
	canReturn: false,
};

export default Footer;
