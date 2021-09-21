import React from 'react'
import { Grid, Image } from './ImageGrid.styles'

const ImageGrid = ({ imgSources }) => (
	<Grid>
		{imgSources.map((src, i) => (
			<Image key={`${src}-${i}`} src={src} alt={`flagged ${src}-${i}`} />
		))}
	</Grid>
)

ImageGrid.defaultProps = {
	imgSources: []
}

export default ImageGrid
