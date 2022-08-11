import React from 'react'
import './UI.module.css'

const Input = ({ type, place, value, setValue, ...props }) => {
	return (
		<input
			{...props}
			type={type}
			placeholder={place}
			value={value}
			onChange={e => setValue(e.target.value)}
		/>
	)
}

export default Input
