import styled from 'styled-components'
import Color from '../../theme/colors'

interface ContainerProps {
	isMobile: boolean
	isMenuOpen: boolean
}

export const Container = styled.aside<ContainerProps>`
	background-color: ${Color.GRAY_900};
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	padding: 0.5rem;
	z-index: 1000;

	${({ isMobile, isMenuOpen }) => {
		if (isMobile) {
			if (isMenuOpen) {
				return `
					width: 100%;
					top: 5rem;
				`
			} else {
				return `
					visibility: hidden;
					top: 5rem;
				`
			}
		} else {
			return `width: 30rem;`
		}
	}}
`

export const Heading = styled.header`
	font-size: 1.4rem;
	font-weight: bold;
	line-height: 1.7rem;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	padding: 1.2rem 0 1.6rem 0;
`
