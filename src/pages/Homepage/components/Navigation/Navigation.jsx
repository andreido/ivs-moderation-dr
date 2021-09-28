import React from 'react'
import Button from '../../../../components/Button'
import { ReactComponent as SettingsIcon } from '../../../../assets/settings.svg'
import MenuIcon from '../../../../assets/MenuIcon'
import { Container, LeftNav, RightNav } from './Navigation.styles'
import useBreakpoints from '../../../../contexts/breakpoints/useBreakpoints'

const Navigation = ({ isMenuOpen, setMenuOpen, hasChannels }) => {
	const { isMobile } = useBreakpoints()

	return (
		<Container>
			<LeftNav>
				{isMobile && (
					<Button
						active={isMenuOpen}
						onClick={() => setMenuOpen((prev) => !prev)}
					>
						<MenuIcon active={isMenuOpen} notif={hasChannels && !isMenuOpen} />
					</Button>
				)}
			</LeftNav>
			<RightNav>
				<Button>
					<SettingsIcon />
				</Button>
				<Button>Log out</Button>
			</RightNav>
		</Container>
	)
}

export default Navigation
