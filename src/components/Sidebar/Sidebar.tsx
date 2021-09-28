import React from 'react'
import SidebarItem from '../SidebarItem'
import { Container, Heading } from './Sidebar.styles'

interface Props<I> {
	items: I[]
	setSelectedChannelId: (selectedChannelId: string) => void
	isMobile: boolean
	isMenuOpen: boolean
	setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar = <I extends { id: string }>({
	children,
	items,
	setSelectedChannelId,
	isMobile,
	isMenuOpen,
	setMenuOpen
}: React.PropsWithChildren<Props<I>>) => {
	const setSelectedItem = (id: string) => {
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
