import { useContext } from 'react'
import BreakpointContext from './context'

const useBreakpoints = () => {
	const context = useContext(BreakpointContext)

	if (!context) {
		throw new Error(
			'Breakpoints context must be consumed inside the Breakpoints Provider'
		)
	}

	return context
}

export default useBreakpoints
