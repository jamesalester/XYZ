import React, { useState, useEffect, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useHistory } from 'react-router-dom';

import { getBricks } from '../../resources/bricks';

import style from './Brick.module.css';

gsap.registerPlugin(ScrollTrigger);

const Brick = (props) => {
	const { id, innerBricks, widths, height, image, title } = props;
	const [width, setWidth] = useState(window.innerWidth);
	const [brickWidth, setBrickWidth] = useState(widths[0]);
	const [brickHeight, setBrickHeight] = useState(height);
	const [innerBrickArray, setInnerBricks] = useState([]);
	const [containerClass, setContainerClass] = useState([]);
	let history = useHistory();

	useLayoutEffect(() => {
		ScrollTrigger.create({
			trigger: `#brick-${id}`,
			start: 'center bottom',
			onEnter: () =>
				gsap.to(`#brick-${id}`, {
					opacity: 1,
					y: 0,
					duration: 0.5,
				}),
			once: true,
		});
		ScrollTrigger.refresh();
	}, [id]);

	useEffect(() => {
		window.addEventListener('resize', () => setWidth(window.innerWidth));
		return () => {
			window.removeEventListener('resize', () => setWidth(window.innerWidth));
		};
	}, []);

	useEffect(() => {
		if (!innerBricks) return setContainerClass(style.brick);
		const newInnerBricks = getBricks(innerBricks);
		console.log({ newInnerBricks });
		setInnerBricks(newInnerBricks);
		setContainerClass(style.brickWall);
	}, [innerBricks]);

	useEffect(() => {
		const index = width < 576 ? 3 : width < 750 ? 2 : width < 1000 ? 1 : 0;
		const newHeight = width > 576 ? height : innerBricks ? 600 : 200;
		setBrickWidth(widths[index]);
		setBrickHeight(newHeight);
	}, [width, widths, height, innerBricks]);

	const handleClick = () => {
		if (id === 'bigBrick') return;
		history.push(`/portfolio/${id}`);
	};

	return (
		<div
			id={`brick-${id}`}
			className={containerClass}
			style={{ width: brickWidth, height: brickHeight, opacity: 0, transform: 'translateY(80px)' }}
			onClick={handleClick}
		>
			{image && <img className={style.image} alt={"James Lester's " + title} src={image} />}
			{innerBrickArray}
		</div>
	);
};

const textAttrShape = {
	color: PropTypes.string.isRequired,
	alignment: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export const brickShape = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	widths: PropTypes.arrayOf(PropTypes.string).isRequired,
	height: PropTypes.string,
	image: PropTypes.string.isRequired,
	textAttr: PropTypes.shape(textAttrShape),
};

Brick.propTypes = {
	...brickShape,
	innerBricks: PropTypes.arrayOf(PropTypes.shape(brickShape)),
};
Brick.defaultProps = {};

export default Brick;
