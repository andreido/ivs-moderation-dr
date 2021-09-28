import { createContext } from 'react'
import Breakpoint from '../../theme/breakpoints'

export interface IBreakpointsContext {
	breakpoint: Breakpoint
	isMobile: boolean
}

export default createContext<IBreakpointsContext | null>(null)
