import styled from 'styled-components'
import Color from '../../theme/colors'

interface ButtonProps {
	active?: boolean
	hoverColor?: string
	rippleColor?: string
}

export const DefaultButton = styled.button<
	React.PropsWithChildren<ButtonProps>
>`
	border: none;
	height: 3.8rem;
	padding: 0 2rem;
	border-radius: 0.6rem;
	color: white;
	background-color: ${Color.GRAY_400};
	font-size: 1.4rem;
	font-weight: 600;
	line-height: 1.7rem;
	text-align: center;
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	justify-content: center;

	background-position: center;
	transition: background 0.5s;

	${({ active, hoverColor }) => {
		if (!active) {
			return `
				&:hover {
					background: ${hoverColor || Color.PRIMARY}
						radial-gradient(circle, transparent 1%, ${hoverColor || Color.PRIMARY} 1%)
						center/15000%;
				}
			`
		}
	}}

	&:active {
		background-color: ${Color.PRIMARY_HOVER};
		background-size: 100%;
		transition: background 0s;
	}
`

export const ActionButton = styled.button<React.PropsWithChildren<ButtonProps>>`
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

	background-position: center;
	transition: background 0.5s;

	&:hover {
		background: ${({ hoverColor }) => hoverColor || Color.PRIMARY}
			radial-gradient(
				circle,
				transparent 1%,
				${({ hoverColor }) => hoverColor || Color.PRIMARY} 1%
			)
			center/15000%;
	}

	&:active {
		background-color: ${Color.PRIMARY_HOVER};
		background-size: 100%;
		transition: background 0s;
	}
`
