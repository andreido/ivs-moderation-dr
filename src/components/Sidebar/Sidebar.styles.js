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
`

export const Heading = styled.header`
	font-size: 14px;
	font-weight: bold;
	line-height: 17px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
`
