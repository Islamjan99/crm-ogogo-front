import React from 'react'
import './UI.module.css'

const Img = ({ src, alt, isActive, setIsActive, ...props }) => {
	return (
		<img
			onClick={() => setIsActive(!isActive)}
			src={src}
			alt={alt}
			{...props}
		/>
	)
}

export default Img
