import React from 'react';
import PropTypes from 'prop-types';

import { getBricks } from '../../resources/bricks';

import style from './Page.module.css';

const Page = (props) => {
	const { isDevWork } = props;
	return (
		<div>
			<h1 className={style.heading}>{isDevWork ? 'Development Work' : 'Product Design'}</h1>
			<div className={style.brickWall}>{getBricks(isDevWork ? 'development' : 'productDesign')}</div>
		</div>
	);
};

Page.propTypes = {
	isDevWork: PropTypes.bool,
};
Page.defaultProps = {
	isDevWork: false,
};

export default Page;
