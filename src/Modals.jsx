import React from 'react'
import Button from './Components/UI/Button'
import HTag from './Components/UI/Htag'
import './Global.css'

const Modals = ({ show, setShow, info, fun }) => {
	const good = () => {
		fun()
		setShow(false)
	}
	const poorly = () => {
		setShow(false)
	}
	return (
		<div className='modals__wrapper'>
			<HTag tag={'h2'}>Подтвердите действие</HTag>
			<div className='line'></div>
			<div className='text'>{info}</div>
			<div className='modal__btn'>
				<Button
					onClick={() => good()}
					style={{
						width: '50px',
						padding: '5px 0',
						textAlign: 'center',
						fontSize: '18px',
						fontWeight: '500',
						cursor: 'pointer',
						background: 'rgb(106, 199, 106)',
						border: 'rgb(106, 199, 106)',
					}}
				>
					Да
				</Button>
				<Button
					onClick={() => poorly()}
					style={{
						width: '50px',
						padding: '5px 0',
						textAlign: 'center',
						fontSize: '18px',
						fontWeight: '500',
						cursor: 'pointer',
						background: 'rgb(252, 16, 16)',
						border: 'rgb(252, 16, 16)',
					}}
				>
					Нет
				</Button>
			</div>
		</div>
	)
}

export default Modals
