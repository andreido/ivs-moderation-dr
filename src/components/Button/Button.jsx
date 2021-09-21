import React from 'react'
import { StyledButton } from './Button.styles'

const Button = ({ children, ...buttonProps }) => {
	return <StyledButton {...buttonProps}>{children}</StyledButton>
}

export default Button
