import styled from 'styled-components'

export const Container = styled.header`
	position: fixed;
	top: 0;
	right: 0;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 5rem;
	z-index: 10;
	background-color: #1b2733;
	padding: 0.6rem 1.5rem;
`

export const LeftNav = styled.nav``

export const RightNav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: flex-start;

	& > button {
		margin-left: 1.5rem;
	}
`
