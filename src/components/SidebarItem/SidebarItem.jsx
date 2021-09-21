import React from 'react'
import { Container, Image, Name } from './SidebarItem.styles'

const SidebarItem = ({
	item: { id, name, image, alt, isActive },
	setSelectedItem
}) => (
	<Container isActive={isActive} onClick={() => setSelectedItem(id)}>
		<Image src={image} alt={alt} />
		<Name isActive={isActive}>{name}</Name>
	</Container>
)

export default SidebarItem
