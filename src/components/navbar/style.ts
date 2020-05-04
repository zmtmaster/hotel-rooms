import styled from 'styled-components/macro';
import { FaAlignRight } from 'react-icons/fa';

import logo from 'images/logo.svg';

export const NavContainer = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	padding: 0.75rem 2rem;
	background: var(--offWhite);
	z-index: 1;
`;

export const NavCenter = styled.div`
	@media screen and (min-width: 768px) {
		max-width: 1170px;
		margin: 0 auto;
		display: flex;
	}
`;

export const NavHeader = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Logo = styled.img.attrs(() => ({
	alt: 'resort',
	src: logo,
}))``;

export const NavButton = styled.button`
	background: transparent;
	border: none;
	cursor: pointer;
	outline: none;

	@media screen and (min-width: 768px) {
		display: none;
	}
`;

export const NavIcon = styled(FaAlignRight)`
	font-size: 1.5rem;
	color: var(--primaryColor);
`;

interface ToggleProp {
	show: boolean;
}

export const NavLinksContainer = styled.ul<ToggleProp>`
	height: 0;
	overflow: hidden;
	transition: var(--mainTransition);
	list-style-type: none;

	${(props) =>
		props.show &&
		`
    height: 100px;
  `}

	&& a {
		display: block;
		text-decoration: none;
		padding: 1rem 0;
		color: var(--mainBlack);
		transition: var(--mainTransition);
		text-align: center;
		font-size: 1rem;
		font-weight: 600;
		letter-spacing: var(--mainSpacing);

		&:hover {
			color: var(--primaryColor);
		}
	}

	@media screen and (min-width: 768px) {
		height: auto;
		display: flex;
		margin-left: 4rem;

		&& a {
			margin: 0 1rem;
			padding: 0.5rem 0;
		}
	}
`;
