import React from 'react'
import style from './UI.module.css'

const Img = ({ src, alt, ...props }) => {
	return <img className={style.img} src={src} alt={alt} {...props} />
}

export default Img
