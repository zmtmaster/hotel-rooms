import styled, { css } from 'styled-components';

export const Container = styled.section`
	padding: 5rem 0 0 0;
`;

const screenCap = css`
	@media screen and (min-width: 992px) {
		width: 95vw;
		max-width: 1170px;
	}
`;

export const ImagesContainer = styled.div`
	width: 80vw;
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	grid-row-gap: 2rem;
	grid-column-gap: 50px;

	${screenCap}
`;
export const RoomImage = styled.img`
	width: 100%;
	display: block;
`;
export const Info = styled.div`
	width: 80vw;
	display: grid;
	grid-template-columns: 1fr;
	margin: 2rem auto;

	${screenCap}

	@media screen and (min-width: 992px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-column-gap: 2rem;
	}
`;
export const RoomDescription = styled.article`
	margin: 1rem 0;

	&& h3 {
		text-transform: capitalize;
		letter-spacing: var(--mainSpacing);
	}

	&& p {
		line-height: 1.5;
	}
`;

export const RoomInfo = styled.article`
	margin: 1rem 0;

	&& h6 {
		font-weight: 300;
	}

	&& h3,
	h6 {
		text-transform: capitalize;
		letter-spacing: var(--mainSpacing);
	}

	@media screen and (min-width: 992px) {
		padding-left: 3rem;
	}
`;

export const ExtrasContainer = styled.section`
	width: 80vw;
	margin: 0 auto 3rem auto;

	&& h6 {
		text-transform: capitalize;
		letter-spacing: var(--mainSpacing);
	}

	${screenCap}
`;
export const Extras = styled.ul`
	list-style-type: none;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
	grid-column-gap: 2rem;
	grid-row-gap: 1rem;
`;

/* ERRORS */
export const ErrorContainer = styled.div`
	text-align: center;
	text-transform: uppercase;
	margin: 2rem 0;
`;
export const ErrorText = styled.h3``;
