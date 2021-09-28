import styled from 'styled-components'
import Color from '../../theme/colors'

interface ContainerProps {
	isActive: boolean
}

interface NameProps {
	isActive: boolean
}

export const Container = styled.button<ContainerProps>`
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
		isActive ? Color.GRAY_400 : 'transparent'};
	background-position: center;
	transition: background 0.5s;

	&:hover {
		background: ${Color.GRAY_400}
			radial-gradient(circle, transparent 1%, ${Color.GRAY_400} 1%)
			center/15000%;
	}

	&:active {
		background-color: ${Color.GRAY_300};
		background-size: 100%;
		transition: background 0s;
	}
`

export const Image = styled.img`
	object-fit: cover;
	height: 5.8rem;
	width: 6.8rem;
	border-radius: 1rem;
`

export const Name = styled.p<NameProps>`
	color: ${({ isActive }) => (isActive ? Color.PRIMARY : Color.SECONDARY)};
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
