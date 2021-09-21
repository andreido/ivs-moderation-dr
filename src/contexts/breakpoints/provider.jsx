import React, { useState, useMemo, useEffect, useCallback } from 'react'
import _ from 'lodash'
import BreakpointsContext from './context'
import breakpoints, { mobileBreakpoints } from '../../theme/breakpoints'

const BreakpointsProvider = ({ children }) => {
	const [width, setWidth] = useState(window.innerWidth)

	const getCurrentBreakpoint = useCallback((width) => {
		let currentBreakpoint = 'xs'
		_.forEach(breakpoints, (bp_width, bp_type) => {
			if (width > bp_width) {
				currentBreakpoint = bp_type
			} else return false
		})
		return currentBreakpoint
	}, [])

	useEffect(() => {
		const handleWindowResize = () => {
			setWidth(window.innerWidth)
		}
		window.addEventListener('resize', handleWindowResize)
		return () => window.removeEventListener('resize', handleWindowResize)
	}, [])

	const value = useMemo(() => {
		const breakpoint = getCurrentBreakpoint(width)
		return {
			breakpoint,
			isMobile: mobileBreakpoints.includes(breakpoint)
		}
	}, [getCurrentBreakpoint, width])

	return (
		<BreakpointsContext.Provider value={value}>
			{children}
		</BreakpointsContext.Provider>
	)
}

export default BreakpointsProvider
