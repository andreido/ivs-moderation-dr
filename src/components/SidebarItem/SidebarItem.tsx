import { Container, Image, Name } from './SidebarItem.styles'

interface Item {
	id: string
	name?: string
	image?: string
	alt?: string
	isActive?: boolean
}

interface Props {
	item: Item
	setSelectedItem: (id: string) => void
}

const SidebarItem = ({
	item: {
		id,
		name = '',
		image = '',
		alt = `thumbnail-${id}`,
		isActive = false
	},
	setSelectedItem
}: Props) => (
	<Container isActive={isActive} onClick={() => setSelectedItem(id)}>
		<Image src={image} alt={alt} />
		<Name isActive={isActive}>{name}</Name>
	</Container>
)

export default SidebarItem
