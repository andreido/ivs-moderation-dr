import styled from 'styled-components'
import colors from '../../theme/colors'

export const DefaultButton = styled.button`
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

export const ActionButton = styled.button`
	width: 15rem;
	height: 7.2rem;
	border: none;
	border-radius: 1.2rem;
	color: white;
	background-color: rgba(255, 255, 255, 0.3);
	font-family: Inter;
	font-size: 1.4rem;
	font-weight: 500;
	line-height: 1.7rem;
	cursor: pointer;
	display: inline-flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	row-gap: 0.9rem;
	padding: 1rem 5.9rem;

	transition: 0.3s background-color;

	&:hover {
		background-color: ${({ hoverColor }) => hoverColor || colors.primary};
	}
`
