import styled from 'styled-components'
import breakpoints from '../../theme/breakpoints'

export const Grid = styled.div`
	display: grid;
	grid-gap: 2.5rem;
	margin: 0 auto;
	padding: 2.9rem;
	overflow-y: overlay;

	@media (min-width: ${breakpoints.xs}px) {
		grid-template-columns: repeat(1, 1fr);
	}

	@media (min-width: ${breakpoints.sm}px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: ${breakpoints.lg}px) {
		grid-template-columns: repeat(3, 1fr);
	}
`

export const Image = styled.img`
	width: 100%;
	min-width: 25rem;
	max-width: 40rem;
	border-radius: 0.8rem;
`
