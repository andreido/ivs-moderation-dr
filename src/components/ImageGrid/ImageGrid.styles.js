import styled from 'styled-components'

export const Grid = styled.div`
	display: grid;
	grid-gap: 2.5rem;
	padding: 2.5rem 8.6rem;

	@media (min-width: 700px) {
		grid-template-columns: repeat(1, 1fr);
	}

	@media (min-width: 1000px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 1350px) {
		grid-template-columns: repeat(3, 1fr);
	}
`

export const Image = styled.img`
	border-radius: 0.8rem;
	object-fit: cover;
	width: 100%;
	min-width: 30.6rem;
`
