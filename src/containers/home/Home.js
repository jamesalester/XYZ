import React from 'react';

import Header from '../../components/header/Header';
import Page from '../page/Page';
import About from '../about/About';
import Footer from '../../components/footer/Footer';

const Home = () => {
	return (
		<>
			<Header />
			<Page isDevWork />
			<Page />
			<About />
			<Footer />
		</>
	);
};

export default Home;

/* 
    	// pageUp = () => {
	// 	animateScrollTo(0);
	// };

	// pageDown = () => {
	// 	animateScrollTo(window.innerHeight, { speed: 5000 });
	// };
    
    <>
<Header clicked={this.pageDown} />
<Page isDevWork />
<Page />
<About />
<Footer clicked={this.pageUp} />
</> */
