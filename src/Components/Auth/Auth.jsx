import React, { useEffect, useState } from 'react'
import styles from './Auth.module.css'
import H2 from '../UI/H2'
import Input from '../UI/Input'
import Img from '../UI/Img'
import imagePassword from './medical.svg'
import imagePasswordHide from './hide_icon_184218.svg'
import Button from '../UI/Button'
import P from '../UI/P'

const Auth = () => {
	const [isActive, setIsActive] = useState(false)
	const [email, setEmail] = useState()
	const [password, setPassword] = useState()

	useEffect(() => {}, [isActive])
	const authorization = () => {}
	console.log(isActive)
	return (
		<div className={styles.Auth__wrapper}>
			<div className={styles.Auth__container}>
				<H2
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
				</H2>
				<div className={styles.inp__email}>
					<Input
						style={{ fontSize: '16px', lineHeight: '170%', color: '#254A5A' }}
						type={'email'}
						place={'Email'}
					/>
				</div>
				<div className={styles.inp__password}>
					<Input
						style={{ fontSize: '16px', lineHeight: '170%', color: '#254A5A' }}
						type={isActive ? 'text' : 'password'}
						place={'Пароль'}
					/>
					<Img
						style={{ cursor: 'pointer', width: '14px', height: '14px' }}
						src={isActive ? imagePasswordHide : imagePassword}
						alt={'img password'}
						isActive={isActive}
						setIsActive={setIsActive}
					/>
				</div>
				<div className={styles.auth__btn}>
					<Button
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
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Auth
