import React from 'react';
import { Link } from 'react-router-dom';

import defaultBcg from 'images/defaultBcg.jpeg';
import Hero from 'components/hero';
import Banner from 'components/banner';

import {
	Container,
	ErrorText,
	ErrorContainer,
	ImagesContainer,
	RoomImage,
	Info,
	RoomDescription,
	RoomInfo,
	ExtrasContainer,
	Extras,
} from './style';
import { ROUTES } from 'constants/internal';
import { useRoomParams } from 'hooks';

const SingleRoom = () => {
	const room = useRoomParams();

	if (!room) {
		return (
			<ErrorContainer>
				<ErrorText>No such room</ErrorText>
				<Link to={ROUTES.ROOMS} className="btn-primary">
					Back to rooms
				</Link>
			</ErrorContainer>
		);
	}

	const {
		name,
		description,
		capacity,
		size,
		price,
		extras,
		breakfast,
		pets,
		images,
	} = room;
	const [BG, ...rest] = images;

	return (
		<>
			<Hero uri={BG || defaultBcg}>
				<Banner title={`${name} room`}>
					<Link to={ROUTES.ROOMS} className="btn-primary">
						Back to rooms
					</Link>
				</Banner>
			</Hero>
			<Container>
				<ImagesContainer>
					{rest.map((uri, index) => (
						<RoomImage key={index} src={uri} alt={name} />
					))}
				</ImagesContainer>
				<Info>
					<RoomDescription>
						<h3>Details</h3>
						<p>{description}</p>
					</RoomDescription>
					<RoomInfo>
						<h3>Info</h3>
						<h6>price: ${price}</h6>
						<h6>size: {size} SQFT</h6>
						<h6>
							max capacity: {capacity > 1 ? `${capacity} people` : 'person'}
						</h6>
						<h6>{pets ? 'pets allowed' : ' no pets allowed'}</h6>
						<h6>{breakfast && 'free breakfast included'}</h6>
					</RoomInfo>
				</Info>
				<ExtrasContainer>
					<h6>Extras</h6>
					<Extras>
						{extras.map((item, index) => (
							<li key={index}>- {item}</li>
						))}
					</Extras>
				</ExtrasContainer>
			</Container>
		</>
	);
};

export default SingleRoom;
