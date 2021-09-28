import { Channel } from '../../contexts/channels/context'

interface SidebarChannel {
	id: string
	name: string
	image: string
	alt: string
	isActive: boolean
}

export const getSidebarChannels = (
	channels: Channel[],
	selectedChannelId: string
): SidebarChannel[] =>
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

export const getChannel = (channels: Channel[], channelId: string) =>
	channels?.find(({ id }) => id === channelId)
