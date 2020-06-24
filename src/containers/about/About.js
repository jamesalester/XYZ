import React from 'react';

import { getBricks } from '../../resources/bricks';

import style from './About.module.css';

const About = () => (
	<div>
		<h1 className={style.heading}>About Me</h1>
		<div className={style.brickWall}>
			<div className={style.halfbrick}>
				<div className={style.about}>
					<a href="mailto:james@jameslester.xyz">
						<h2>james@</h2>
						<h2>jameslester.xyz</h2>
					</a>

					<p>
						My passion is developing apps and websites. I am a co-founder of Loopspeed, a Surrey based digital agency
						and specialise in Swift, React and React Native development. I would love to hear from you.
					</p>
				</div>
				{getBricks('snakesAndLadders')}
			</div>
			<div className={style.contact} />
		</div>
	</div>
);

export default About;
