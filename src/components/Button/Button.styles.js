import styled from 'styled-components'
import colors from '../../theme/colors'

export const StyledButton = styled.button`
	border: none;
	height: 3.8rem;
	padding: 0 2rem;
	border-radius: 0.6rem;
	color: white;
	background-color: ${colors.gray400};
	font-size: 1.4rem;
	font-weight: 600;
	line-height: 1.7rem;
	text-align: center;
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	justify-content: center;

	transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
		box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
		border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

	&:hover {
		background-color: ${colors.primary};
	}
`
