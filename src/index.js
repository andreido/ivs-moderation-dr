import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import ChannelsProvider from './contexts/channels/provider'
import BreakpointsProvider from './contexts/breakpoints/provider'

import './index.css'
import App from './App'

ReactDOM.render(
	<React.StrictMode>
		<Router basename={process.env.PUBLIC_URL}>
			<ChannelsProvider>
				<BreakpointsProvider>
					<App />
				</BreakpointsProvider>
			</ChannelsProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
)
