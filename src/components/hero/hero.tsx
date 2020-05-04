import React, { ReactNode } from 'react';

import { Header, HType } from './style';

interface HeroProps {
	children?: null | ReactNode;
	hero?: HType;
	uri?: string;
}

const Hero = ({ children, hero = HType.Default, uri }: HeroProps) => {
	return (
		<Header uri={uri} type={hero}>
			{children}
		</Header>
	);
};

export default Hero;
