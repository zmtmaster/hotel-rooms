import styled from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.article`
	box-shadow: var(--lightShadow);
	transition: var(--mainTransition);

	&:hover {
		box-shadow: var(--darkShadow);
	}
`;

export const ImageContainer = styled.div`
	position: relative;

	&& img {
		width: 100%;
		display: block;
		transition: var(--mainTransition);

		&:hover {
			opacity: 0.3;
		}
	}

	&:hover {
		background: rgba(0, 0, 0, 0.8);

		&& div.price-container {
			opacity: 0;
		}
		&& a.link {
			transform: translate(-50%, -50%) scale(1);
		}
	}
`;

export const PriceContainer = styled.div.attrs(() => ({
	className: 'price-container',
}))`
	position: absolute;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.8);
	color: var(--mainWhite);
	padding: 0.3rem 0.6rem 0.5rem;
	border-bottom-right-radius: 1rem;
	font-size: 0.5rem;
	text-align: center;
	transition: var(--mainTransition);
`;

export const Price = styled.h6`
	margin-bottom: 0;
	font-size: 0.9rem;
	font-weight: 300;
	letter-spacing: var(--mainSpacing);
`;

export const Link = styled(RouterLink)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: scale(0);
	transition: all 0.3s linear;

	&&:hover {
		background: rgba(0, 0, 0, 0.8);
	}
`;

export const InfoContainer = styled.p`
	background: var(--darkGrey);
	text-transform: capitalize;
	padding: 0.5rem 0;
	text-align: center;
	font-weight: 700;
	letter-spacing: var(--mainSpacing);
`;
