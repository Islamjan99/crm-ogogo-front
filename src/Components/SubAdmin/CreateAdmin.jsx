import React, { useState } from 'react'
import styles from './SubAdmin.module.css'
import P from '../UI/P'
import Input from '../UI/Input'
import Button from '../UI/Button'
import { createSubAdmin } from '../../Http/API'
import Img from '../UI/Img'
import imagePassword from './medical.svg'
import imagePasswordHide from './hide_icon_184218.svg'

const CreateAdmin = ({ show, setShow }) => {
	const [admin, setAdmin] = useState({})
	const [password, setPassword] = useState(false)
	const [password2, setPassword2] = useState(false)
	const [pass, setPass] = useState(false)

	const changeHandler = event => {
		if (event.target.name === 'password') {
			setPass(true)
		}
		setAdmin({ ...admin, [event.target.name]: event.target.value })
	}

	let form = [
		{ type: 'text', name: 'name', placeholder: 'Имя' },
		{ type: 'text', name: 'second_name', placeholder: 'Фамилию' },
		{ type: 'text', name: 'father_name', placeholder: 'Oтчество' },
		{ type: 'text', name: 'branch', placeholder: 'Офис' },
		{ type: 'text', name: 'work_phone', placeholder: '+996 000 000 000' },
		{ type: 'text', name: 'personal_phone', placeholder: '+996 000 000 000' },
		{ type: 'text', name: 'username', placeholder: 'Имя пользователя' },
	]

	const hidden = () => {
		createSubAdmin(admin).then(data => alert(JSON.stringify(data)))
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
						<P style={{ borderBottom: '1px solid black' }}>Офис:</P>
						<P style={{ borderBottom: '1px solid black' }}>Раб. телефона:</P>
						<P style={{ borderBottom: '1px solid black' }}>Лич. телефона:</P>
						<P style={{ borderBottom: '1px solid black' }}>Логин:</P>
						<P style={{ borderBottom: '1px solid black' }}>Пароль:</P>
						<P style={{ borderBottom: '1px solid black' }}>повторите пароль:</P>
					</div>
					<form onChange={changeHandler}>
						{form.map(({ type, name, placeholder }, i) => {
							return (
								<Input
									key={i}
									type={type}
									name={name}
									place={placeholder}
									style={{
										fontSize: '16px',
										borderBottom: '1px solid black',
										width: '100%',
									}}
								/>
							)
						})}
						<div className={styles.inp__password}>
							<Input
								style={{
									fontSize: '16px',
									width: '90%',
								}}
								type={password ? 'text' : 'password'}
								autoComplete='current-password'
								place={'Пароль'}
								name={'password'}
								onChange={changeHandler}
							/>
							<Img
								onClick={() => setPassword(!password)}
								style={{ cursor: 'pointer', width: '14px', height: '14px' }}
								src={password ? imagePasswordHide : imagePassword}
								alt={'img password'}
							/>
						</div>
						<div className={styles.inp__password}>
							<Input
								style={{
									fontSize: '16px',
									width: '90%',
								}}
								type={password2 ? 'text' : 'password'}
								autoComplete='current-password'
								place={'Подтверждение пароля'}
								name={'password2'}
								onChange={changeHandler}
							/>
							<Img
								onClick={() => setPassword2(!password2)}
								style={{ cursor: 'pointer', width: '14px', height: '14px' }}
								src={password2 ? imagePasswordHide : imagePassword}
								alt={'img password'}
							/>
						</div>
					</form>
				</div>
				<P
					style={
						pass
							? {
									width: '190px',
									fontSize: '14px',
									marginLeft: '188px',
									color: 'grey',
							  }
							: {
									display: 'none',
									width: '190px',
									fontSize: '14px',
									marginLeft: '188px',
							  }
					}
				>
					пароль должен содержать как минимум 8 символов
				</P>
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
									admin.password2 !== undefined &&
									admin.name !== null &&
									admin.second_name !== null &&
									admin.father_name !== null &&
									admin.work_phone !== null &&
									admin.personal_phone !== null &&
									admin.username !== null &&
									admin.password !== null &&
									admin.password2 !== null &&
									admin.password === admin.password2
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
								admin.password2 !== undefined &&
								admin.name !== null &&
								admin.second_name !== null &&
								admin.father_name !== null &&
								admin.work_phone !== null &&
								admin.personal_phone !== null &&
								admin.username !== null &&
								admin.password !== null &&
								admin.password2 !== null &&
								admin.password === admin.password2
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
