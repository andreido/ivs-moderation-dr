export const getSidebarChannels = (channels, selectedChannelId) =>
	channels.map(({ id, flagged_images }) => {
		const channelNameIndex = id.indexOf('channel')
		const channelName = id.slice(channelNameIndex)
		return {
			id,
			name: channelName,
			image: flagged_images[0],
			alt: `flagged thumbnail for channel: ${channelName}`,
			isActive: id === selectedChannelId
		}
	})

export const getChannel = (channels, channelId) =>
	channels?.find(({ id }) => id === channelId)
