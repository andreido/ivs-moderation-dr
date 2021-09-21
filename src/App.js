import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import routes from './constants/routes'

const App = () => (
	<Switch>
		<Route exact path={routes.HOME} component={Homepage} />
	</Switch>
)

export default App
