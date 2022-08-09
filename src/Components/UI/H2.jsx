import React from 'react'
import './UI.module.css'

const H2 = ({ children, ...props }) => {
	return <h2 {...props}>{children}</h2>
}

export default H2
