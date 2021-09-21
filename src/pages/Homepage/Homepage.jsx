import React, { useEffect, useMemo } from 'react'
import {
	ChannelsCount,
	Navigation,
	FlaggedCount,
	FlaggedChannels
} from './Homepage.styles'

import Sidebar from '../../components/Sidebar'
import Button from '../../components/Button'
import ImageGrid from '../../components/ImageGrid'
import FloatingActionMenu from './components/FloatingActionMenu'

import { ReactComponent as SettingsIcon } from '../../assets/settings.svg'
import { ReactComponent as ThumbsUpIcon } from '../../assets/thumbsUp.svg'
import { ReactComponent as ThumbsDownIcon } from '../../assets/thumbsDown.svg'
import { multiChannel as channelsData } from '../../dummyChannelsData'

import useChannels from '../../contexts/channels/useChannels'
import { getSidebarChannels, getChannel } from './utils'
import colors from '../../theme/colors'

const Homepage = () => {
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
				setSelectedItem={setSelectedChannelId}
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
			<Navigation>
				<Button>
					<SettingsIcon />
				</Button>
				<Button>Log out</Button>
			</Navigation>
			{selectedChannel && (
				<FlaggedChannels>
					<FlaggedCount>{`${selectedChannel.flagged_images.length} flagged thumbnails`}</FlaggedCount>
					<ImageGrid imgSources={selectedChannel.flagged_images} />
					<FloatingActionMenu>
						<Button variant="action" hoverColor={colors.lightGreen}>
							<ThumbsUpIcon />
							Ignore
						</Button>
						<Button variant="action" hoverColor={colors.lightRed}>
							<ThumbsDownIcon />
							Terminate
						</Button>
					</FloatingActionMenu>
				</FlaggedChannels>
			)}
		</>
	)
}

export default Homepage
