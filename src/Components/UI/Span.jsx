import React from 'react'
import './UI.module.css'

const Span = ({ children, ...props }) => {
	return <div {...props}>{children}</div>
}

export default Span
