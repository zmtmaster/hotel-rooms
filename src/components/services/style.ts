import styled from 'styled-components/macro';

export const Container = styled.section`
	padding: 5rem 0;
	background: var(--darkGrey);
	text-align: center;
`;

export const Center = styled.div`
	width: 90vw;
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
	grid-row-gap: 2rem;
	grid-column-gap: 50px;

	@media screen and (min-width: 992px) {
		width: 95vw;
		max-width: 1170px;
	}
`;

export const Article = styled.article``;
export const ItemIcon = styled.span`
	display: inline-block;
	color: var(--primaryColor);
	font-size: 2.5rem;
	margin-bottom: 1.5rem;
`;
export const ItemTitle = styled.h6`
	letter-spacing: var(--mainSpacing);
	text-transform: uppercase;
`;
export const ItemInfo = styled.p`
	width: 80%;
	margin: 0 auto;

	@media screen and (min-width: 1200px) {
		width: 100%;
	}
`;
