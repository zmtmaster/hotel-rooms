import React from 'react';
import { Loader, Text, Gear } from './style';

const Loading = () => {
	return (
		<Loader>
			<Text>rooms data loading</Text>
			<Gear />
		</Loader>
	);
};

export default Loading;
