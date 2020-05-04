import styled from 'styled-components/macro';

import gear from 'images/gif/loading-arrow.gif';

export const Loader = styled.div`
	text-transform: capitalize;
	text-align: center;
	margin-top: 3rem;
`;

export const Text = styled.h4``;
export const Gear = styled.img.attrs(() => ({
	alt: 'loading-state',
	src: gear,
}))``;
