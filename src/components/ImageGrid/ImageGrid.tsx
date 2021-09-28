import { Grid, Image } from './ImageGrid.styles'

interface Props {
	imgSources: string[]
}

const ImageGrid = ({ imgSources = [] }: Props) => (
	<Grid>
		{imgSources.map((src, i) => (
			<Image key={`${src}-${i}`} src={src} alt={`flagged ${src}-${i}`} />
		))}
	</Grid>
)

export default ImageGrid
