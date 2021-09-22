import styled from 'styled-components'
import colors from '../../theme/colors'

export const ChannelsCount = styled.span`
	color: ${colors.primary};
`

export const MainPanel = styled.div`
	margin-top: 5rem;
	height: calc(100vh - 5rem);
	overflow-y: overlay;
	margin-left: ${({ isMobile }) => (isMobile ? 0 : '30rem')};

	${({ isMobile }) => {
		if (isMobile) {
			return `&::-webkit-scrollbar {
				background: transparent; /* Chrome/Safari/Webkit */
				width: 0px;
			}`
		}
	}}
`

export const FlaggedCount = styled.h1`
	background-color: ${colors.gray400};
	padding: 0.6rem 1.5rem;
	font-size: 1.4rem;
	font-weight: 600;
	line-height: 1.7rem;
	border-radius: 1.6rem;
	margin: 0;
`

export const FlaggedChannels = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: ${({ isMobile }) => (isMobile ? '3.5rem' : '0')};
`
