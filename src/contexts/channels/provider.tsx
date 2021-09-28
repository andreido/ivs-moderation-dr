import { useMemo, useReducer, useCallback } from 'react'
import ChannelsContext, { Channel, IChannelsContext } from './context'

interface ChannelsState {
	channels: Channel[]
	selectedChannelId: string
}

enum ActionType {
	SET_CHANNELS = 'SET_CHANNELS',
	SET_SELECTED_CHANNEL = 'SET_SELECTED_CHANNEL'
}

type Action =
	| { type: ActionType.SET_CHANNELS; channels: Channel[] }
	| { type: ActionType.SET_SELECTED_CHANNEL; selectedChannelId: string }

const initialState: ChannelsState = {
	channels: [],
	selectedChannelId: ''
}

const reducer = (state: ChannelsState, action: Action) => {
	switch (action.type) {
		case ActionType.SET_CHANNELS:
			return { ...state, channels: action.channels }
		case ActionType.SET_SELECTED_CHANNEL:
			return { ...state, selectedChannelId: action.selectedChannelId }
		default:
			throw new Error('Unexpected action type')
	}
}

const ChannelsProvider = ({ children }: React.PropsWithChildren<{}>) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const setChannels = useCallback(
		(channels: Channel[]) =>
			dispatch({ type: ActionType.SET_CHANNELS, channels }),
		[]
	)
	const setSelectedChannelId = useCallback(
		(selectedChannelId: string) =>
			dispatch({ type: ActionType.SET_SELECTED_CHANNEL, selectedChannelId }),
		[]
	)

	const value: IChannelsContext = useMemo(() => {
		return { ...state, setChannels, setSelectedChannelId }
	}, [state, setChannels, setSelectedChannelId])

	return (
		<ChannelsContext.Provider value={value}>
			{children}
		</ChannelsContext.Provider>
	)
}

export default ChannelsProvider
