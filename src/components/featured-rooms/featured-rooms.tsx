import React, { useContext } from 'react';
import { RoomContext } from 'contexts/rooms';
import Title from 'components/title';
import Room from 'components/room';

import { Container, Center } from './style';

const FeaturedRooms = () => {
	const { featuredRooms } = useContext(RoomContext);

	return (
		<Container>
			<Title title="featured rooms" />
			<Center>
				{featuredRooms.map((room, index) => (
					<Room key={index} room={room} />
				))}
			</Center>
		</Container>
	);
};

export default FeaturedRooms;
