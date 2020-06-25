import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { getBricks } from '../../resources/bricks';

import style from './About.module.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
	useLayoutEffect(() => {
		ScrollTrigger.create({
			trigger: `#about`,
			start: 'center bottom',
			onEnter: () =>
				gsap.to(`#about`, {
					opacity: 1,
					y: 0,
					duration: 0.5,
				}),
			once: true,
		});

		ScrollTrigger.create({
			trigger: `#contact`,
			start: 'center bottom',
			onEnter: () =>
				gsap.to(`#contact`, {
					opacity: 1,
					y: 0,
					duration: 0.5,
				}),
			once: true,
		});

		ScrollTrigger.refresh();
	}, []);

	return (
		<div>
			<h1 className={style.heading}>About Me</h1>
			<div className={style.brickWall}>
				<div className={style.halfbrick}>
					<div id="about" className={style.about} style={{ opacity: 0, transform: 'translateY(80px)' }}>
						<a href="mailto:james@jameslester.xyz">
							<h2>james@</h2>
							<h2>jameslester.xyz</h2>
						</a>

						<p>
							My passion is developing apps and websites. I am a co-founder of Loopspeed, a Surrey based digital
							agency and specialise in Swift, React and React Native development. I would love to hear from you.
						</p>
					</div>
					{getBricks('snakesAndLadders')}
				</div>
				<div id="contact" className={style.contact} style={{ opacity: 0, transform: 'translateY(80px)' }} />
			</div>
		</div>
	);
};

export default About;
