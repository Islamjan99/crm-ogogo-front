import ContentLoader from 'react-content-loader'

const ShirtSkeleton = props => (
	<ContentLoader
		speed={2}
		width={250}
		height={460}
		viewBox='0 0 250 460'
		backgroundColor='#e9e9e9'
		foregroundColor='#fafafa'
		{...props}
	>
		<rect x='-23' y='0' rx='0' ry='0' width='530' height='250' />
		<rect x='117' y='457' rx='0' ry='0' width='118' height='0' />
	</ContentLoader>
)

export default ShirtSkeleton
