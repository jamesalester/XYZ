import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/home/Home';
import Project from './containers/project/Project';
import ScrollToTop from './hoc/ScrollToTop';

const App = () => (
	<ScrollToTop>
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/portfolio/:projectId" exact component={Project} />
		</Switch>
	</ScrollToTop>
);

export default App;
