import React from 'react'
import './UI.module.css'

const H3 = ({ children, ...props }) => {
	return <h3 {...props}>{children}</h3>
}

export default H3
