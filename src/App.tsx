import { Switch, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import RoutePath from './constants/routes'

const App = () => (
	<Switch>
		<Route exact path={RoutePath.HOME} component={Homepage} />
	</Switch>
)

export default App
