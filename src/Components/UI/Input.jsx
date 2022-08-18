import React from 'react'
import style from './UI.module.css'

const Input = ({ type, place, ...props }) => {
	return (
		<input className={style.input} {...props} type={type} placeholder={place} />
	)
}

export default Input
