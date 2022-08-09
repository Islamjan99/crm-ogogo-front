import React from 'react'
import './UI.module.css'

const P = ({ children, ...props }) => {
	return <p {...props}>{children}</p>
}

export default P
