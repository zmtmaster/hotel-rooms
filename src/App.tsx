import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import { ROUTES } from './constants/internal';

const Navbar = lazy(() => import('./components/navbar'));
const SingleRoom = lazy(() => import('./components/single-room'));
const Home = lazy(() => import('./pages/home'));
const Rooms = lazy(() => import('./pages/rooms'));
const Error = lazy(() => import('./pages/error'));

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
