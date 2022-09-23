import React, { useState } from 'react'
import styles from './SubAdmin.module.css'
import P from '../UI/P'
import Input from '../UI/Input'
import Button from '../UI/Button'
import { createSubAdmin } from '../../Http/API'

const CreateAdmin = ({ show, setShow }) => {
	const [admin, setAdmin] = useState({})

	const changeHandler = event => {
		setAdmin({ ...admin, [event.target.name]: event.target.value })
	}

	let form = [
		{ type: 'text', name: 'name', placeholder: 'Введите имя' },
		{ type: 'text', name: 'second_name', placeholder: 'Введите фамилию' },
		{ type: 'text', name: 'father_name', placeholder: 'Введите отчество' },
		{ type: 'text', name: 'work_phone', placeholder: '+996 000 000 000' },
		{ type: 'text', name: 'personal_phone', placeholder: '+996 000 000 000' },
		{ type: 'text', name: 'username', placeholder: 'Введите имя пользователя' },
		{ type: 'text', name: 'password', placeholder: 'Введите пароль' },
	]

	const hidden = () => {
		createSubAdmin(admin).then(data => console.log(data))
		setShow(false)
		console.log(admin)
		// window.location.reload()
	}
	return (
		<div
			className={show ? styles.createAdmin__wrapper : styles.createAdmin__none}
		>
			<div className={styles.createAdmin__container}>
				<div className={styles.createAdmin__block}>
					<div className={styles.createAdmin__info}>
						<P style={{ borderBottom: '1px solid black' }}>Имя:</P>
						<P style={{ borderBottom: '1px solid black' }}>Фамилия:</P>
						<P style={{ borderBottom: '1px solid black' }}>Отчество:</P>
						<P style={{ borderBottom: '1px solid black' }}>Раб. телефона:</P>
						<P style={{ borderBottom: '1px solid black' }}>Лич. телефона:</P>
						<P style={{ borderBottom: '1px solid black' }}>Логин:</P>
						<P style={{ borderBottom: '1px solid black' }}>Пароль:</P>
						<P style={{ borderBottom: '1px solid black' }}>
							Подтверждение пароля:
						</P>
					</div>
					<form onChange={changeHandler}>
						{form.map(({ type, name, placeholder }, i) => {
							return (
								<Input
									key={i}
									type={type}
									name={name}
									place={placeholder}
									style={{ fontSize: '16px', borderBottom: '1px solid black' }}
								/>
							)
						})}
					</form>
				</div>
				<div className={styles.createAdmin__btn}>
					<div>
						<Button
							onClick={() => {
								if (
									admin.name !== undefined &&
									admin.second_name !== undefined &&
									admin.father_name !== undefined &&
									admin.work_phone !== undefined &&
									admin.personal_phone !== undefined &&
									admin.username !== undefined &&
									admin.password !== undefined &&
									admin.name !== null &&
									admin.second_name !== null &&
									admin.father_name !== null &&
									admin.work_phone !== null &&
									admin.personal_phone !== null &&
									admin.username !== null &&
									admin.password !== null
								) {
									hidden()
								}
							}}
							style={
								admin.name !== undefined &&
								admin.second_name !== undefined &&
								admin.father_name !== undefined &&
								admin.work_phone !== undefined &&
								admin.personal_phone !== undefined &&
								admin.username !== undefined &&
								admin.password !== undefined &&
								admin.name !== null &&
								admin.second_name !== null &&
								admin.father_name !== null &&
								admin.work_phone !== null &&
								admin.personal_phone !== null &&
								admin.username !== null &&
								admin.password !== null
									? {
											padding: '12px 15px',
											cursor: 'pointer',
											borderRadius: '10px',
											fontSize: '16px',
											background: 'rgb(106, 199, 106)',
											border: 'rgb(106, 199, 106)',
											fontWeight: '500',
									  }
									: {
											padding: '12px 15px',
											cursor: 'pointer',
											borderRadius: '10px',
											fontSize: '16px',
											background: 'rgba(106, 199, 106)',
											opacity: '0.5',
											border: 'rgb(106, 199, 106)',
											fontWeight: '500',
									  }
							}
						>
							Создать админа
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

export default CreateAdmin
