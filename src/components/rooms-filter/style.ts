import styled, { css } from 'styled-components/macro';

export const Container = styled.section`
	padding: 5rem 0;
`;

export const Form = styled.form`
	width: 60vw;
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(161px, 1fr));
	grid-row-gap: 2rem;
	grid-column-gap: 40px;

	@media screen and (min-width: 776px) {
		width: 70vw;
	}

	@media screen and (min-width: 992px) {
		width: 95vw;
		max-width: 1170px;
	}
`;

export const FormGroup = styled.div`
	text-transform: capitalize;

	& label {
		display: block;
		letter-spacing: var(--mainSpacing);
		margin-bottom: 0.5rem;
	}
`;

const control = css`
	width: 100%;
	background: transparent;
	font-size: 1rem;
`;

export const Select = styled.select`
	${control}
`;
export const Input = styled.input`
	${control}
`;
export const SizeInputs = styled.div`
	display: flex;
`;
export const SizeInput = styled.input`
	width: 40%;
	padding: 0.2rem;
	border: 1px solid var(--mainBlack);
	border-radius: 0.3rem;
	margin-right: 0.3rem;
`;
export const SingleExtra = styled.div`
	display: grid;
	grid-auto-rows: auto;
	grid-template-columns: 1rem auto;
	font-size: 0.8rem;
	margin-left: 0.5rem;
`;
