import React from 'react'
import { DefaultButton, ActionButton } from './Button.styles'

const Button = ({ children, variant, ...buttonProps }) => {
	switch (variant) {
		case 'action': {
			return <ActionButton {...buttonProps}>{children}</ActionButton>
		}
		default:
			// default button variant
			return <DefaultButton {...buttonProps}>{children}</DefaultButton>
	}
}

Button.defaultProps = {
	variant: 'default'
}

export default Button
