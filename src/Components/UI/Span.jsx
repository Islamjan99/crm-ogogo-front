import React from 'react'
import './UI.module.css'

const Span = ({ children, ...props }) => {
	return <span {...props}>{children}</span>
}

export default Span
