import React, { useState, useMemo, useEffect, useCallback } from 'react'
import BreakpointsContext, { IBreakpointsContext } from './context'
import Breakpoint, { mobileBreakpoints } from '../../theme/breakpoints'

const BreakpointsProvider = ({ children }: React.PropsWithChildren<{}>) => {
	const [width, setWidth] = useState(window.innerWidth)

	const getCurrentBreakpoint = useCallback((width: number): Breakpoint => {
		let currentBreakpoint = Breakpoint.XS
		for (let bp in Breakpoint) {
			const _bp = Number(bp)
			if (!isNaN(_bp)) {
				if (width > _bp) {
					currentBreakpoint = _bp
				} else break
			}
		}
		return currentBreakpoint
	}, [])

	useEffect(() => {
		const handleWindowResize = () => {
			setWidth(window.innerWidth)
		}
		window.addEventListener('resize', handleWindowResize)
		return () => window.removeEventListener('resize', handleWindowResize)
	}, [])

	const value: IBreakpointsContext = useMemo(() => {
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
