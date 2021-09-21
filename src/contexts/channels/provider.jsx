import React, { useMemo, useReducer, useCallback } from 'react'
import ChannelsContext from './context'

const SET_CHANNELS = 'SET_CHANNELS'
const SET_SELECTED_CHANNEL = 'SET_SELECTED_CHANNEL'

const initialState = {
	channels: [],
	selectedChannelId: ''
}

const reducer = (state, action) => {
	switch (action.type) {
		case SET_CHANNELS:
			return { ...state, channels: action.channels }
		case SET_SELECTED_CHANNEL:
			return { ...state, selectedChannelId: action.selectedChannelId }
		default:
			throw new Error('Unexpected action type')
	}
}

const ChannelsProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const setChannels = useCallback(
		(channels) => dispatch({ type: SET_CHANNELS, channels }),
		[]
	)
	const setSelectedChannelId = useCallback(
		(selectedChannelId) =>
			dispatch({ type: SET_SELECTED_CHANNEL, selectedChannelId }),
		[]
	)

	const value = useMemo(() => {
		return { ...state, setChannels, setSelectedChannelId }
	}, [state, setChannels, setSelectedChannelId])

	return (
		<ChannelsContext.Provider value={value}>
			{children}
		</ChannelsContext.Provider>
	)
}

export default ChannelsProvider
