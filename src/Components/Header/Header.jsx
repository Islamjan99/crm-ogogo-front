import { useContext, useEffect } from 'react'
import { fetchCourses, fetchMentors } from '../../Http/API'
import { Context } from '../../index'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import Img from '../UI/Img'
import heart from './heart.svg'
import styles from './Header.module.css'
import H2 from '../UI/H2'

const Header = () => {
	const { Store } = useContext(Context)

	useEffect(() => {
		fetchCourses().then(item => Store.setCourses(item))
		fetchMentors().then(item => Store.setMentors(item))
	}, [Store.mentors, Store.courses])

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
