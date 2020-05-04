import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';

import Hero, { HType } from 'components/hero';
import Banner from 'components/banner';
import RoomsFilter from 'components/rooms-filter';
import RoomsList from 'components/rooms-list';
import { ROUTES } from 'constants/internal';
import Loading from 'components/loading';

const Rooms = () => {
	return (
		<>
			<Hero hero={HType.Room}>
				<Banner title="our rooms">
					<Link className="btn-primary" to={ROUTES.HOME}>
						return home
					</Link>
				</Banner>
			</Hero>
			<Suspense fallback={<Loading />}>
				<RoomsFilter />
				<RoomsList />
			</Suspense>
		</>
	);
};

export default Rooms;
