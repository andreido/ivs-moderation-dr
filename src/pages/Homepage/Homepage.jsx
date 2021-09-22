import React, { useEffect, useMemo, useState } from 'react'
import {
	ChannelsCount,
	FlaggedCount,
	FlaggedChannels,
	MainPanel
} from './Homepage.styles'

import Sidebar from '../../components/Sidebar'
import ImageGrid from '../../components/ImageGrid'
import FloatingActionMenu from './components/FloatingActionMenu'
import Navigation from './components/Navigation'

import { multiChannel as channelsData } from '../../dummyChannelsData'

import useChannels from '../../contexts/channels/useChannels'
import useBreakpoints from '../../contexts/breakpoints/useBreakpoints'
import { getSidebarChannels, getChannel } from './utils'

const Homepage = () => {
	const [isMenuOpen, setMenuOpen] = useState(false)
	const { isMobile } = useBreakpoints()
	const { channels, selectedChannelId, setChannels, setSelectedChannelId } =
		useChannels()

	const selectedChannel = useMemo(
		() => getChannel(channels, selectedChannelId),
		[channels, selectedChannelId]
	)

	useEffect(() => {
		const channels = channelsData.data.listChannelss.items
		setChannels(channels)
		if (!channels.length) {
			setSelectedChannelId(null)
		} else {
			setSelectedChannelId(channels[0].id)
		}
	}, [setChannels, setSelectedChannelId])

	return (
		<>
			<Sidebar
				items={getSidebarChannels(channels, selectedChannelId)}
				setSelectedChannelId={setSelectedChannelId}
				isMobile={isMobile}
				isMenuOpen={isMenuOpen}
				setMenuOpen={setMenuOpen}
			>
				{channels.length ? (
					<>
						<ChannelsCount>{channels.length}</ChannelsCount>
						&nbsp;
						{`Stream${channels.length === 1 ? '' : 's'} to review`}
					</>
				) : (
					<>No streams to review</>
				)}
			</Sidebar>
			<MainPanel isMobile={isMobile}>
				<Navigation
					isMenuOpen={isMenuOpen}
					setMenuOpen={setMenuOpen}
					hasChannels={!!channels.length}
				/>
				{selectedChannel && (
					<FlaggedChannels isMobile={isMobile}>
						<FlaggedCount>
							{`${selectedChannel.flagged_images.length} flagged thumbnails`}
						</FlaggedCount>
						<ImageGrid imgSources={selectedChannel.flagged_images} />
						<FloatingActionMenu />
					</FlaggedChannels>
				)}
			</MainPanel>
		</>
	)
}

export default Homepage
