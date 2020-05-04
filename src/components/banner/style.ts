import styled from 'styled-components/macro';

export const Gap = styled.div`
	width: 10rem;
	height: 5px;
	background: var(--primaryColor);
	margin: 1.7rem auto;
`;

export const Title = styled.h1`
	font-size: 2.5rem;
	@media screen and (min-width: 576px) {
		font-size: 3rem;
	}

	@media screen and (min-width: 992px) {
		font-size: 4rem;
	}
`;
export const SubTitle = styled.p`
	font-size: 1.2rem;
	margin-bottom: 2rem;
`;

export const BannerContainer = styled.div`
	display: inline-block;
	background: rgba(0, 0, 0, 0.5);
	color: var(--mainWhite);
	padding: 2rem 1rem;
	text-align: center;
	text-transform: capitalize;
	letter-spacing: var(--mainSpacing);

	@media screen and (min-width: 576px) {
		padding: 2rem 3rem;
	}

	@media screen and (min-width: 992px) {
		padding: 2rem 6rem;
	}
`;
