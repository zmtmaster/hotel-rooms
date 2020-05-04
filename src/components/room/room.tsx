import React from 'react';
import { ROUTES } from 'constants/internal';
import defaultImage from 'images/room-1.jpeg';

import { Room } from 'utils';
import {
	Container,
	ImageContainer,
	PriceContainer,
	Price,
	Link,
	InfoContainer,
} from './style';

interface RoomProps {
	room: Room;
}

const RoomComponent = ({ room }: RoomProps) => {
	const { name, slug, images, price } = room;

	return (
		<Container>
			<ImageContainer>
				<img src={images[0] || defaultImage} alt="single room" />
				<PriceContainer>
					<Price>${price}</Price>
					<p>per night</p>
				</PriceContainer>
				<Link className="link btn-primary" to={`${ROUTES.ROOMS}/${slug}`}>
					Features
				</Link>
			</ImageContainer>
			<InfoContainer>{name}</InfoContainer>
		</Container>
	);
};

export default RoomComponent;
