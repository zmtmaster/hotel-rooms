import React, { ReactNode } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

import Title from 'components/title';
import {
	Container,
	Center,
	Article,
	ItemIcon,
	ItemTitle,
	ItemInfo,
} from './style';

interface Service {
	icon: ReactNode;
	title: string;
	info: string;
}

const services: Array<Service> = [
	{
		icon: <FaCocktail />,
		title: 'Free cocktails',
		info: 'loram info here',
	},
	{
		icon: <FaHiking />,
		title: 'Endless hiking',
		info: 'loram info here',
	},
	{
		icon: <FaShuttleVan />,
		title: 'Free shuttle',
		info: 'loram info here',
	},
	{
		icon: <FaBeer />,
		title: 'strongest beer',
		info: 'loram info here',
	},
];

const Services = () => {
	return (
		<Container>
			<Title title="services" />
			<Center>
				{services.map(({ icon, title, info }, index) => (
					<Article key={index}>
						<ItemIcon>{icon}</ItemIcon>
						<ItemTitle>{title}</ItemTitle>
						<ItemInfo>{info}</ItemInfo>
					</Article>
				))}
			</Center>
		</Container>
	);
};

export default Services;
