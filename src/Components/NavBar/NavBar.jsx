import React from 'react'
import { Link } from 'react-router-dom'
import Img from '../UI/Img'
import P from '../UI/P'
import styles from './NavBar.module.css'
import mentors from './icon-mentor.svg'
import students from './icon-student.svg'

const NavBar = () => {
	return (
		<div className={styles.navBar__wrapper}>
			<Link to={'/mentors'}>
				<div className={styles.navBar__mentors}>
					<P style={{ color: '#b7c1c5' }}>Менторы</P>
					<Img
						style={{ width: '40px', height: '48px' }}
						src={mentors}
						alt={'icon students'}
					/>
				</div>
			</Link>
			<Link to={'/courses'}>
				<div className={styles.navBar__courses}>
					<P style={{ color: '#b7c1c5' }}>Курсы</P>
					<Img
						style={{ width: '40px', height: '48px' }}
						src={students}
						alt={'icon students'}
					/>
				</div>
			</Link>
			<Link to={'/students'}>
				<div className={styles.navBar__students}>
					<P style={{ color: '#b7c1c5' }}>Ученики</P>
					<Img
						style={{ width: '40px', height: '48px' }}
						src={students}
						alt={'icon students'}
					/>
				</div>
			</Link>
		</div>
	)
}

export default NavBar
