import styled from 'styled-components'
import colors from '../../../../theme/colors'

export const Container = styled.div`
	position: fixed;
	bottom: 3.5rem;
	background: linear-gradient(
			104.48deg,
			rgba(101, 8, 145, 0.3) -1.61%,
			rgba(19, 56, 151, 0) 73.97%
		),
		${colors.primary};
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
	border-radius: 16px;
	z-index: 100;
	padding: 1.2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	column-gap: 1.5rem;
`
