import React, { ReactNode } from 'react';

import { BannerContainer, Title, SubTitle, Gap } from './style';

interface BannerProps {
	children?: ReactNode;
	title?: string;
	subtitle?: string;
}

const Banner = ({ children, title, subtitle }: BannerProps) => {
	return (
		<BannerContainer>
			<Title>{title}</Title>
			<Gap />
			<SubTitle>{subtitle}</SubTitle>
			{children}
		</BannerContainer>
	);
};

export default Banner;
