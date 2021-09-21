import React from 'react'
import SidebarItem from '../SidebarItem'
import { Container, Heading } from './Sidebar.styles'

const Sidebar = ({ children, items, setSelectedItem }) => (
	<Container>
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

export default Sidebar
