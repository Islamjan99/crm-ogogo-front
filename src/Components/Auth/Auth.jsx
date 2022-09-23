import React, { useContext, useEffect, useState } from 'react'
import styles from './Auth.module.css'
import HTag from '../UI/Htag'
import Input from '../UI/Input'
import Img from '../UI/Img'
import imagePassword from './medical.svg'
import imagePasswordHide from './hide_icon_184218.svg'
import P from '../UI/P'
import { Context } from '../..'
import { login } from '../../Http/API'
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
	const { Store } = useContext(Context)
	const [isActive, setIsActive] = useState(false)
	const [user, setUser] = useState([])
	let navigate = useNavigate()

	const authorization = () => {
		login(user).then(data => {
			console.log(data)
			if (data.status < 300) {
				Store.setUser(jwt_decode(data.data.access))
				sessionStorage.setItem('token', JSON.stringify(data.data.access))
				navigate('/courses')
				window.location.reload()
			} else {
				alert('Ошибка! Проверьте логин или пароль')
			}
		})
	}

	const changePassword = () => {
		setIsActive(!isActive)
	}
	const setInfo = event => {
		setUser({
			...user,
			[event.target.name]: event.target.value,
		})
	}

	return (
		<div className={styles.Auth__wrapper}>
			<form className={styles.Auth__container}>
				<HTag
					tag={'h2'}
					style={{
						textAlign: 'center',
						fontSize: '25px',
						lineHeight: '34px%',
						letterSpacing: '0.03em',
						fontWeight: '500',
						textTransform: 'uppercase',
						color: '#0F303F',
						marginBottom: '40px',
					}}
				>
					Вход
				</HTag>
				<div className={styles.inp__email}>
					<Input
						style={{ fontSize: '16px', lineHeight: '170%', color: '#254A5A' }}
						type={'text'}
						place={'user name'}
						autoComplete='name'
						name={'username'}
						onChange={setInfo}
					/>
				</div>
				<div className={styles.inp__password}>
					<Input
						style={{ fontSize: '16px', lineHeight: '170%', color: '#254A5A' }}
						type={isActive ? 'text' : 'password'}
						autoComplete='current-password'
						place={'password'}
						name={'password'}
						onChange={setInfo}
					/>
					<Img
						onClick={changePassword}
						style={{ cursor: 'pointer', width: '14px', height: '14px' }}
						src={isActive ? imagePasswordHide : imagePassword}
						alt={'img password'}
					/>
				</div>
				<div className={styles.auth__btn}>
					<P
						onClick={() => authorization()}
						style={{
							color: '#EAE9E8',
							fontWeight: '800',
							fontSize: '16px',
							lineHeight: '22px',
							textAlign: 'center',
							textTransform: 'uppercase',
							width: '100%',
							margin: '14px 18px 15px 19px',
							cursor: 'pointer',
						}}
					>
						Войти
					</P>
				</div>
			</form>
		</div>
	)
}

export default Auth
