import styled from 'styled-components'
import colors from '../../theme/colors'

export const Container = styled.button`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	border: none;
  width: 100%;
  border-radius: 0.6rem;
	cursor: pointer;
	padding: 1rem;
	margin-top: 0.5rem;
	background-color: ${({ isActive }) =>
		isActive ? colors.gray400 : 'transparent'};

	transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

	&:hover {
		background-color: ${colors.gray400};
	}
`

export const Image = styled.img`
	object-fit: cover;
	height: 5.8rem;
	width: 6.8rem;
	border-radius: 1rem;
`

export const Name = styled.p`
	color: ${({ isActive }) => (isActive ? colors.primary : colors.secondary)};
	font-family: Inter;
	font-size: 1.4rem;
	font-weight: 500;
	line-height: 1.7rem;
	text-align: center;

	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	padding-left: 1.3rem;
`
