import React from 'react'
import './UI.module.css'

const Input = ({ type, place, ...props }) => {
	return <input {...props} type={type} placeholder={place} />
}

export default Input
