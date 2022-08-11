import React, { useState } from 'react'
import styles from './Mentor.module.css'
import P from '../UI/P'
import Input from '../UI/Input'
import Button from '../UI/Button'
import { createMentor } from '../../Http/MentorsAPI'

const CreateMentor = () => {
	const [mentor, setMentor] = useState({})

	const changeHandler = event => {
		setMentor({ ...mentor, [event.target.name]: event.target.value })
	}

	let form = [
		{ type: 'text', name: 'name', placeholder: 'Введите имя' },
		{ type: 'text', name: 'second_name', placeholder: 'Введите фамилию' },
		{ type: 'text', name: 'phone', placeholder: 'Введите номер телефона' },
	]

	return (
		<div className={styles.createMentor__wrapper}>
			<div className={styles.createMentor__container}>
				<form onChange={changeHandler}>
					{form.map(({ type, name, placeholder }, i) => {
						return (
							<input
								key={i}
								type={type}
								name={name}
								placeholder={placeholder}
							/>
						)
					})}
				</form>
				<div className={styles.createMentor__btn}>
					<div>
						<Button
							onClick={() =>
								createMentor(mentor).then(data => console.log(data))
							}
							style={{ padding: '12px 15px', cursor: 'pointer' }}
						>
							Создать ментора
						</Button>
					</div>
					<div>
						<Button style={{ padding: '12px 15px', cursor: 'pointer' }}>
							Удалить ментора
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CreateMentor
