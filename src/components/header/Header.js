import React from 'react';
import { motion } from 'framer-motion';

import logo from '../../assets/logo.svg';
import arrow from '../../assets/arrow.svg';

import style from './Header.module.css';

const Header = (props) => (
	<div className={style.container}>
		<motion.img
			className={style.logo}
			src={logo}
			alt="James Lester"
			initial={{ scale: 0.5, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			transition={{ type: 'spring', stiffness: 100 }}
		/>
		<div className={style.arrowContainer}>
			<motion.img
				className={style.arrow}
				src={arrow}
				alt="James Lester"
				onClick={props.clicked}
				initial={{ scale: 0.8, opacity: 0.3 }}
				animate={{ scale: 1, opacity: 0.8 }}
				transition={{
					yoyo: Infinity,
					duration: 3,
					ease: 'linear',
				}}
			/>
		</div>
	</div>
);

export default Header;
