import { createContext } from 'react'

export interface Channel {
	id: string
	playback_url: string
	time: string
	flagged_images: string[]
}

export interface IChannelsContext {
	setChannels: (channels: Channel[]) => void
	setSelectedChannelId: (selectedChannelId: string) => void
	channels: Channel[]
	selectedChannelId: string
}

export default createContext<IChannelsContext | null>(null)
