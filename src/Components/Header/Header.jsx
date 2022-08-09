import { useContext, useEffect, useState } from 'react'
import { fetchMentors } from '../../Http/MentorsAPI'
import { Context } from '../../index'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import Img from '../UI/Img'
import logo from './Group 807.svg'
import styles from './Header.module.css'

const Header = () => {
	const { MentorsStore } = useContext(Context)

	useEffect(() => {
		fetchMentors().then(item => MentorsStore.setMentors(item))
	}, [])

	useEffect(() => {}, [])
	return (
		<div className={styles.header__wrapper}>
			<Link to={'/'}>
				<div className={styles.header__logo}>
					<Img
						style={{ width: '100px', height: '25px' }}
						src={logo}
						alt={'OGOGO LOGO'}
					/>
				</div>
			</Link>
			<NavBar />
		</div>
	)
}

export default Header
