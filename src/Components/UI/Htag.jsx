const HTag = ({ tag, children, ...props }) => {
	const Tag = tag || 'h1'
	return <Tag {...props}>{children}</Tag>
}

export default HTag
