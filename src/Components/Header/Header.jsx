import { useContext, useEffect, useState } from 'react'
import { fetchMentors } from '../../Http/MentorsAPI'
import { Context } from '../../index'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import Img from '../UI/Img'
import heart from './heart.svg'
import styles from './Header.module.css'
import H2 from '../UI/H2'

const Header = () => {
	const { MentorsStore } = useContext(Context)

	useEffect(() => {
		fetchMentors().then(item => MentorsStore.setMentors(item))
	}, [])

	useEffect(() => {}, [])
	return (
		<div className={styles.header__wrapper}>
			<Link to={'/'}>
				<div className={styles.header__title}>
					<H2
						style={{
							fontFamily: 'Muller-Trial',
							fontStyle: 'normal',
							fontWeight: '500',
							fontSize: '32px',
							lineHeight: '100%',
							color: '#ffffff',
						}}
					>
						OGOGO CRM
					</H2>
				</div>
			</Link>
			<NavBar />
		</div>
	)
}

export default Header
