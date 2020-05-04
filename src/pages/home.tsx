import React from 'react';
import { Link } from 'react-router-dom';

import Hero from 'components/hero';
import Banner from 'components/banner';
import Services from 'components/services';
import FeaturedRooms from 'components/featured-rooms';
import { ROUTES } from 'constants/internal';

const Home = () => {
	return (
		<>
			<Hero>
				<Banner
					title="Luxurious rooms"
					subtitle="deluxe rooms starting at $299"
				>
					<Link className="btn-primary" to={ROUTES.ROOMS}>
						Our Rooms
					</Link>
				</Banner>
			</Hero>
			<Services />
			<FeaturedRooms />
		</>
	);
};

export default Home;
