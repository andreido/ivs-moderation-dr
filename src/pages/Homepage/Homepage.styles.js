import styled from 'styled-components'
import colors from '../../theme/colors'

export const ChannelsCount = styled.span`
	color: ${colors.primary};
`

export const Navigation = styled.nav`
	position: fixed;
	top: 0;
	right: 0;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding: 0.6rem 0;
	background-color: #1b2733;
	z-index: 10;
	width: 100%;
	height: 5rem;

	button + button {
		margin: 0 1.5rem;
	}
`

export const FlaggedChannels = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-left: 30rem;
`

export const FlaggedCount = styled.h1`
	background-color: ${colors.gray400};
	display: inline-block;
	padding: 6px 15px;
	font-size: 1.4rem;
	font-weight: 600;
	line-height: 1.7rem;
	border-radius: 1.6rem;
	margin: 0;
`

export const MainPanel = styled.div`
	height: calc(100vh - 5rem);
	position: relative;
	margin-top: 5rem;
	overflow-y: overlay;
`
