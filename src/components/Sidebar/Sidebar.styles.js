import styled from 'styled-components'
import colors from '../../theme/colors'

export const Container = styled.aside`
	background-color: ${colors.gray900};
	position: fixed;
	top: 0;
	left: 0;
	width: 30rem;
	height: 100%;
	padding: 0.5rem;
	z-index: 1000;
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
