import styled from 'styled-components'
import Breakpoint from '../../theme/breakpoints'

export const Grid = styled.div`
	display: grid;
	grid-gap: 2.5rem;
	margin: 0 auto;
	padding: 2.9rem;
	overflow-y: overlay;

	@media (min-width: ${Breakpoint.XS}px) {
		grid-template-columns: repeat(1, 1fr);
	}

	@media (min-width: ${Breakpoint.SM}px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: ${Breakpoint.LG}px) {
		grid-template-columns: repeat(3, 1fr);
	}
`

export const Image = styled.img`
	width: 100%;
	min-width: 25rem;
	max-width: 40rem;
	border-radius: 0.8rem;
`
