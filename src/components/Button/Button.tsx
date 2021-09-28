import React from 'react'
import { DefaultButton, ActionButton } from './Button.styles'

interface Props {
	variant?: 'action' | 'default' | null
	[key: string]: any
}

const Button = ({
	children,
	variant = 'default',
	...buttonProps
}: React.PropsWithChildren<Props>) => {
	switch (variant) {
		case 'action': {
			return <ActionButton {...buttonProps}>{children}</ActionButton>
		}
		default:
			// default button variant
			return <DefaultButton {...buttonProps}>{children}</DefaultButton>
	}
}

export default Button
