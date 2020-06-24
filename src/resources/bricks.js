import React from 'react';
import Brick from '../components/Brick/Brick';

import pntImage from '../assets/portfolio/pnt/pnt_hero.jpg';
import pnt0 from '../assets/portfolio/pnt/pnt0.jpg';
import pnt1 from '../assets/portfolio/pnt/pnt1.jpg';
import pnt2 from '../assets/portfolio/pnt/pnt2.jpg';
import pnt3 from '../assets/portfolio/pnt/pnt3.jpg';

import andyhillerImage from '../assets/portfolio/andyhillier/andyhillier_hero.jpg';
import andyhillier0 from '../assets/portfolio/andyhillier/andyhillier0.jpg';
import andyhillier1 from '../assets/portfolio/andyhillier/andyhillier1.jpg';

import brooklandsImage from '../assets/portfolio/brooklands/brooklands_hero.png';
import brooklands0 from '../assets/portfolio/brooklands/brooklands0.jpg';
import brooklands1 from '../assets/portfolio/brooklands/brooklands1.jpg';

import cadImage from '../assets/portfolio/cad/cad_hero.jpg';
import cad0 from '../assets/portfolio/cad/cad0.jpg';
import cad1 from '../assets/portfolio/cad/cad1.jpg';
import cad2 from '../assets/portfolio/cad/cad2.jpg';
import cad3 from '../assets/portfolio/cad/cad3.jpg';
import cad4 from '../assets/portfolio/cad/cad4.jpg';

import gyreImage from '../assets/portfolio/gyre/gyre_hero.jpg';
import gyre0 from '../assets/portfolio/gyre/gyre0.jpg';
import gyre1 from '../assets/portfolio/gyre/gyre1.jpg';
import gyre2 from '../assets/portfolio/gyre/gyre2.jpg';

import integralImage from '../assets/portfolio/integral/integral_hero.jpg';
import integral0 from '../assets/portfolio/integral/integral0.jpg';
import integral1 from '../assets/portfolio/integral/integral1.jpg';

import kevwarwickImage from '../assets/portfolio/kevwarwick/kevwarwick_hero.jpg';
import kevwarwick0 from '../assets/portfolio/kevwarwick/kevwarwick0.jpg';
import kevwarwick1 from '../assets/portfolio/kevwarwick/kevwarwick1.jpg';

import practicalImage from '../assets/portfolio/practical/practical_hero.jpg';
import practical0 from '../assets/portfolio/practical/practical0.jpg';
import practical1 from '../assets/portfolio/practical/practical1.jpg';
import practical2 from '../assets/portfolio/practical/practical2.jpg';
import practical3 from '../assets/portfolio/practical/practical3.jpg';
import practical4 from '../assets/portfolio/practical/practical4.jpg';
import practical5 from '../assets/portfolio/practical/practical5.jpg';

import pushImage from '../assets/portfolio/push/push_hero.jpg';
import push0 from '../assets/portfolio/push/push0.jpg';
import push1 from '../assets/portfolio/push/push1.jpg';

import sfereImage from '../assets/portfolio/sfere/sfere-hero.jpg';
import sfere0 from '../assets/portfolio/sfere/sfere0.jpg';
import sfere1 from '../assets/portfolio/sfere/sfere1.jpg';
import sfere2 from '../assets/portfolio/sfere/sfere2.jpg';

import sketchesImage from '../assets/portfolio/sketches/sketches_hero.jpg';
import sketches0 from '../assets/portfolio/sketches/sketches0.jpg';
import sketches1 from '../assets/portfolio/sketches/sketches1.jpg';
import sketches2 from '../assets/portfolio/sketches/sketches2.jpg';
import sketches3 from '../assets/portfolio/sketches/sketches3.jpg';

import snakesImage from '../assets/portfolio/snakes/snakes_hero.jpg';

// Widths: [>1000px, <1000px, <750px, <600px]

const data = {
	gyre: {
		title: 'GYRE',
		description:
			'GYRE was an interesting project - an app for university students to swap their possessions using a tinder-like swiping mechanism. It was written in Swift for iOS. It involves email and social logins, sharing functions, the swiping mechanism, user profiles, a messaging service, notifications, a search and filter, and so much more.',
		widths: ['60%', '50%', '100%', '100%'],
		image: gyreImage,
		images: [gyre0, gyre1, gyre2],
		textAttr: {
			color: '#FFFFFF',
			alignment: ['right', 'right'],
		},
		links: [
			'https://itunes.apple.com/GB/app/id1434830638?mt=8',
			'https://itunes.apple.com/GB/app/id1434830638?mt=8',
			'https://itunes.apple.com/GB/app/id1434830638?mt=8',
		],
	},
	kevWarwick: {
		title: 'Kevin Warwick Personal Trainer',
		description:
			"Kevin Warwick is a personal trainer based in Andover, Hampshire. We were given the brief to update his previous site ensuring it's responsive with a new design. We designed a fresh site with an interactive advice journey, testimonials from his clients, smooth animations and personal work out plans and a blog powered by Prismic's CMS. It was created using React.",
		widths: ['40%', '50%', '100%', '100%'],
		image: kevwarwickImage,
		images: [kevwarwick0, kevwarwick1],
		textAttr: {
			color: '#FFFFFF',
			alignment: ['left', 'left'],
		},
		links: ['https://kevinwarwickpt.com', 'https://kevinwarwickpt.com'],
	},
	/*------*/
	pnt: {
		title: 'Paranormal Today Series',
		description:
			'The first app that I ever developed was Cryptozoology Today; a collaboration with my brother which features the latest cryptozoological articles and sightings from around the world. It also partners with some of the foremost bloggers and YouTube channels in the field. CZT was then followed by Supernatural Today and Close Encounters Today to complete the series.',
		widths: ['100%', '100%', '100%', '100%'],
		image: pntImage,
		images: [pnt0, pnt1, pnt2, pnt3],
		textAttr: {
			color: '#FFFFFF',
			alignment: ['left', 'center'],
		},
		links: [
			'https://itunes.apple.com/gb/app/cryptozoology-today/id1087423602?mt=8',
			'https://itunes.apple.com/gb/app/cryptozoology-today/id1087423602?mt=8',
			'https://itunes.apple.com/gb/app/supernatural-today/id1170283486?mt=8',
			'https://itunes.apple.com/gb/app/close-encounters-today/id1193259916?mt=8',
		],
	},
	/*------*/
	integral: {
		title: 'Integral Theory',
		description:
			"Integral-theory.com began as an in-house project at Arcitux. It was our first web app written using ReactJS and illustrates Ken Wilber's holistic framework which aims to explain multiple world views and ways of life. The web app combines illustrations, animations and a little bit of logic to create a fresh, clean, modern looking interactive infographic.",
		widths: ['40%', '50%', '100%', '100%'],
		image: integralImage,
		images: [integral0, integral1],
		textAttr: {
			color: '#FFFFFF',
			alignment: ['left', 'left'],
		},
		links: ['https://integral-theory.com/', 'https://integral-theory.com/'],
	},
	push: {
		title: 'Push',
		description:
			"Push is a personal journey companion that helps you feel better about yourself and your future. It is the brainchild of my friend and business partner Matthew Frawley. While still unfinished, we have had feedback that Push has really helped some of our users and Matt and I hope to one day release the comprehensive version that we've always envisioned.",
		widths: ['60%', '50%', '100%', '100%'],
		image: pushImage,
		images: [push0, push1],
		textAttr: {
			color: '#FFFFFF',
			alignment: ['right', 'right'],
		},
	},
	/*------*/
	'andy-hillier': {
		title: 'Andy Hillier Personal Trainer',
		description:
			'Andy Hiller is a personal trainer in Andover, Hampshire. His brief was to update his previous site making it responsive with a new design using his brand colours; yellow and grey. What we designed was a modern site with videos from him and his clients, a contact form, a mail chimp subscription form and all of the relevant information required. It is a static website built using HTML and CSS.',
		widths: ['60%', '50%', '100%', '100%'],
		image: andyhillerImage,
		images: [andyhillier0, andyhillier1],
		textAttr: {
			color: '#FFFFFF',
			alignment: ['right', 'right'],
		},
		links: ['https://www.andyhillierpt.com/', 'https://www.andyhillierpt.com/'],
	},
	brooklands: {
		title: 'Brooklands Motorworks',
		description:
			"While not the most complicated of sites, this one which I made for Brooklands Motorworks was my first and so I thought I should mention it. Comissioned for a local mechanics garage, the website has some basic information, contact form and a page displaying the cars currently for sale by the garage. I also created the logo; a combination of the Rolls-Royce and Bentley logos - the garage's specialisations.",
		widths: ['40%', '50%', '100%', '100%'],
		image: brooklandsImage,
		images: [brooklands0, brooklands1],
		textAttr: {
			color: '#FFFFFF',
			alignment: ['left', 'left'],
		},
		links: ['http://brooklandsmotorworks.org/', 'http://brooklandsmotorworks.org/'],
	},

	/*------*/
	/*------*/

	sfere: {
		title: 'SFere',
		description:
			'The SFere is an iron and ironing board designed for the benefit of people suffering from arthritis. The innovative induction heating constrains all of the electronics to the ironing board allowing the iron to be lighter and cordless. The unique design allows people with arthritis to push it around more easily without having to bend their joints to grasp a handle.',
		widths: ['50%', '100%', '100%', '100%'],
		height: '600px',
		image: sfereImage,
		images: [sfere0, sfere1, sfere2],
		textAttr: {
			color: '#FFFFFF',
			alignment: ['right', 'right'],
		},
		links: [
			'https://itunes.apple.com/gb/app/cryptozoology-today/id1087423602?mt=8',
			'https://itunes.apple.com/gb/app/cryptozoology-today/id1087423602?mt=8',
		],
	},
	/*------*/
	cad: {
		title: 'Computer Aided Design',
		description:
			'CAD is a vital part of product design and a skill that I thoroughly enjoyed whilst at university. There was a steep learning curve to begin with but there are few things in life as satisfying as seeing your completed model with photorealistic rendering. PTC Creo Parametric and Solidworks were used for the computer modelling which were then rendered using Keyshot.',
		widths: ['100%', '100%', '100%', '100%'],
		image: cadImage,
		images: [cad0, cad1, cad2, cad3, cad4],
		textAttr: {
			color: '#FFFFFF',
			alignment: ['right', 'right'],
		},
	},
	sketching: {
		title: 'Sketching',
		description:
			"The art of a designer is the ability to turn ideas into realities and the first step of that is recording those thoughts on paper. It's a skill to be able to illustrate ideas quickly and accurately and it's a skill that I struggled with at university but the sketches below are a record of some of the efforts that I felt confident enough to share.",
		widths: ['50%', '50%', '50%', '100%'],
		image: sketchesImage,
		images: [sketches0, sketches1, sketches2, sketches3],
		textAttr: {
			color: '#FFFFFF',
			alignment: ['left', 'left'],
		},
	},
	practical: {
		title: 'Practical',
		description:
			"Whilst it's rather irrelevant to my current career I thought the practical elements of my degree deserved a place on my site due to the impact they had on me at the time; allowing me to create and think about something more tangible. Below are three projects: an injection moulded toothbrush holder; an electro-mechanical can crusher; and a squashball launching trebuchet.",
		widths: ['50%', '50%', '50%', '100%'],
		image: practicalImage,
		images: [practical0, practical1, practical2, practical3, practical4, practical5],
		textAttr: {
			color: '#FFFFFF',
			alignment: ['right', 'right'],
		},
	},

	/*------*/
	/*------*/

	snakes: {
		title: 'My First Foray into Coding',
		description:
			"The coding experience that began my development career started in an electronics course whilst I was studying at Loughborough University. It was a basic C program of a Snakes & Ladders game and as you can see from below; basic describes it perfectly. Even so, if it wasn't for this simple excuse for programming then I may not be where I am today.",
		widths: ['100%', '100%', '100%', '100%'],
		image: snakesImage,
		textAttr: {
			color: '#FFFFFF',
			alignment: ['left', 'left'],
		},
		code: 'https://repl.it/@JamesLester/SnakesLadders?lite=true&outputonly=1',
	},
};

export const developmentBricks = {
	gyre: data['gyre'],
	kevWarwick: data['kevWarwick'],
	pnt: data['pnt'],
	integral: data['integral'],
	push: data['push'],
	'andy-hillier': data['andy-hillier'],
	brooklands: data['brooklands'],
};

export const productDesignBricks = {
	sfere: data['sfere'],
	bigBrick: {
		widths: ['50%', '100%', '100%', '100%'],
		height: '600px',
		innerBricks: {
			cad: data['cad'],
			sketching: data['sketching'],
			practical: data['practical'],
		},
	},
};

export const snakesAndLaddersBrick = {
	snakes: data['snakes'],
};

export const getBricks = (input) => {
	const brickData =
		input === 'development'
			? developmentBricks
			: input === 'productDesign'
			? productDesignBricks
			: input === 'snakesAndLadders'
			? snakesAndLaddersBrick
			: input;

	if (!brickData) return console.error('Error getting bricks: check input');
	const brickArray = [];
	for (let brick in brickData) {
		brickArray.push({
			...brickData[brick],
			id: brick,
		});
	}

	return brickArray.map((brick) => (
		<Brick
			key={brick.id}
			id={brick.id}
			title={brick.title}
			description={brick.description}
			widths={brick.widths}
			height={brick.height == null ? '300px' : brick.height}
			innerBricks={brick.innerBricks}
			image={brick.image}
			textAttr={brick.textAttr}
		/>
	));
};

export default data;
