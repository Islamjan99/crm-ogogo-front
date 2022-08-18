import React, { useState } from 'react'
import styles from './Mentor.module.css'
import P from '../UI/P'
import Input from '../UI/Input'
import Button from '../UI/Button'
import { createMentor } from '../../Http/MentorsAPI'

const CreateMentor = ({ show, setShow }) => {
	const [mentor, setMentor] = useState({})

	const changeHandler = event => {
		setMentor({ ...mentor, [event.target.name]: event.target.value })
	}

	let form = [
		{ type: 'text', name: 'name', placeholder: 'Введите имя' },
		{ type: 'text', name: 'second_name', placeholder: 'Введите фамилию' },
		{ type: 'text', name: 'phone', placeholder: '+996 000 000 000' },
	]

	return (
		<div
			// onClick={() => {
			// 	setShow(false)
			// }}
			className={
				show ? styles.createMentor__wrapper : styles.createMentor__none
			}
		>
			<div className={styles.createMentor__container}>
				<div className={styles.createMentor__block}>
					<div className={styles.createMentor__info}>
						<P>Имя :</P>
						<P>Фамилия :</P>
						<P>номер телефона :</P>
					</div>
					<form onChange={changeHandler}>
						{form.map(({ type, name, placeholder }, i) => {
							return (
								<Input
									key={i}
									type={type}
									name={name}
									place={placeholder}
									style={{ fontSize: '16px' }}
								/>
							)
						})}
					</form>
				</div>
				<div className={styles.createMentor__btn}>
					<div>
						<Button
							onClick={() => {
								if (
									mentor.name !== null &&
									mentor.second_name !== null &&
									mentor.phone !== null
								) {
									createMentor(mentor).then(data => console.log(data))
								} else {
									console.log(mentor)
								}
							}}
							style={{
								padding: '12px 15px',
								cursor: 'pointer',
								borderRadius: '10px',
								fontSize: '16px',
								background: 'rgb(106, 199, 106)',
								border: 'rgb(106, 199, 106)',
								fontWeight: '500',
							}}
						>
							Создать ментора
						</Button>
					</div>
					<div>
						<Button
							onClick={() => setShow(false)}
							style={{
								padding: '12px 15px',
								cursor: 'pointer',
								borderRadius: '10px',
								fontSize: '16px',
								background: 'rgb(252, 16, 16)',
								fontWeight: '500',
							}}
						>
							Отмена
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CreateMentor
