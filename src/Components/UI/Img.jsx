import React from 'react'
import style from './UI.module.css'

const Img = ({ src, alt, isActive, setIsActive, ...props }) => {
	return (
		<img
			className={style.img}
			onClick={() => setIsActive(!isActive)}
			src={src}
			alt={alt}
			{...props}
		/>
	)
}

export default Img
