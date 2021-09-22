import React from 'react'
import SidebarItem from '../SidebarItem'
import { Container, Heading } from './Sidebar.styles'

const Sidebar = ({
	children,
	items,
	setSelectedChannelId,
	isMobile,
	isMenuOpen,
	setMenuOpen
}) => {
	const setSelectedItem = (id) => {
		setSelectedChannelId(id)
		if (isMenuOpen) {
			setMenuOpen(false)
		}
	}

	return (
		<Container isMobile={isMobile} isMenuOpen={isMenuOpen}>
			<Heading>{children}</Heading>
			{items?.map((item) => (
				<SidebarItem
					key={item.id}
					item={item}
					setSelectedItem={setSelectedItem}
				/>
			))}
		</Container>
	)
}

export default Sidebar
