import React from 'react';

import { TitleContainer, TitleHeader, Underline } from './style';

interface TitleProps {
	title?: string;
}

const Title = ({ title }: TitleProps) => {
	return (
		<TitleContainer>
			<TitleHeader>{title}</TitleHeader>
			<Underline />
		</TitleContainer>
	);
};

export default Title;
