import React, { useEffect, useMemo } from 'react'
import {
	ChannelsCount,
	Navigation,
	FlaggedCount,
	MainPanel
} from './Homepage.styles'

import Sidebar from '../../components/Sidebar'
import Button from '../../components/Button'

import { ReactComponent as SettingsIcon } from '../../assets/settings.svg'
import { multiChannel as channelsData } from '../../dummyChannelsData'

import useChannels from '../../contexts/channels/useChannels'
import { getSidebarChannels, getChannel } from './utils'

const Homepage = () => {
	const { channels, selectedChannelId, setChannels, setSelectedChannelId } =
		useChannels()

	const flaggedCount = useMemo(
		() => getChannel(channels, selectedChannelId)?.flagged_images.length,
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
				<ChannelsCount>{channels.length}</ChannelsCount>
				&nbsp;
				{`Stream${channels.length === 1 ? '' : 's'} to review`}
			</Sidebar>
			<Navigation>
				<Button>
					<SettingsIcon />
				</Button>
				<Button>Log out</Button>
			</Navigation>
			<MainPanel>
				<FlaggedCount>{`${flaggedCount} flagged thumbnails`}</FlaggedCount>
				
			</MainPanel>
		</>
	)
}

export default Homepage
