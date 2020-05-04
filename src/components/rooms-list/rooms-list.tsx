import React, { useContext } from 'react';

import { RoomContext } from 'contexts/rooms';
import RoomComponent from 'components/room';
import { Room } from 'utils';

import { EmptySearch, Text, Container, Center } from './style';

const RoomsList = () => {
	const { sortedRooms } = useContext(RoomContext);

	if (sortedRooms.length === 0) {
		return (
			<EmptySearch>
				<Text>unfortunately no rooms matched your search parameters</Text>
			</EmptySearch>
		);
	}
	return (
		<Container>
			<Center>
				{sortedRooms.map((room: Room) => (
					<RoomComponent key={room.id} room={room} />
				))}
			</Center>
		</Container>
	);
};

export default RoomsList;
