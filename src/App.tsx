import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import { ROUTES } from './constants/internal';

import Navbar from 'components/navbar';
import SingleRoom from 'components/single-room';

import { Home, Rooms, Error } from './pages';

function App() {
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path={ROUTES.HOME}>
					<Home />
				</Route>
				<Route path={ROUTES.SINGLE}>
					<SingleRoom />
				</Route>
				<Route exact path={ROUTES.ROOMS}>
					<Rooms />
				</Route>
				<Route exact>
					<Error />
				</Route>
			</Switch>
		</>
	);
}

export default App;
