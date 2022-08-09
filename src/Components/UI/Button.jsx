import React from 'react'
import './UI.module.css'

const Button = ({ children, ...props }) => {
	return <button {...props}>{children}</button>
}

export default Button
