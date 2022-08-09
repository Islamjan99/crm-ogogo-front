import React from 'react'
import './UI.module.css'

const H1 = ({ children, ...props }) => {
	return <h1 {...props}>{children}</h1>
}

export default H1
