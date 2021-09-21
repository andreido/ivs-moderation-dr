import React from 'react'
import { Container } from './FloatingActionMenu.styles'
import Button from '../../../../components/Button'

import { ReactComponent as ThumbsUpIcon } from '../../../../assets/thumbsUp.svg'
import { ReactComponent as ThumbsDownIcon } from '../../../../assets/thumbsDown.svg'
import colors from '../../../../theme/colors'

const FloatingActionMenu = ({ children }) => (
	<Container>
		<Button variant="action" hoverColor={colors.lightGreen}>
			<ThumbsUpIcon />
			Ignore
		</Button>
		<Button variant="action" hoverColor={colors.lightRed}>
			<ThumbsDownIcon />
			Terminate
		</Button>
	</Container>
)

export default FloatingActionMenu
