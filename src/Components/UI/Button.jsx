import React from 'react'
import style from './UI.module.css'

const Button = ({ children, ...props }) => {
	return (
		<button className={style.button} {...props}>
			{children}
		</button>
	)
}

export default Button
