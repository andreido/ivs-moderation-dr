import { Container } from './FloatingActionMenu.styles'
import Button from '../../../../components/Button'

import { ReactComponent as ThumbsUpIcon } from '../../../../assets/thumbsUp.svg'
import { ReactComponent as ThumbsDownIcon } from '../../../../assets/thumbsDown.svg'
import Color from '../../../../theme/colors'

const FloatingActionMenu = () => (
	<Container>
		<Button variant="action" hoverColor={Color.LIGHT_GREEN}>
			<ThumbsUpIcon />
			Ignore
		</Button>
		<Button variant="action" hoverColor={Color.LIGHT_RED}>
			<ThumbsDownIcon />
			Terminate
		</Button>
	</Container>
)

export default FloatingActionMenu
