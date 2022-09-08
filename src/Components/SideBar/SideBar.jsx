import { useContext, useEffect } from 'react'
import {
	fetchCourses,
	fetchMentors,
	fetchQuantity,
	fetchStudents,
} from '../../Http/API'
import { Context } from '../../index'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import styles from './SideBar.module.css'
import H2 from '../UI/H2'

const SideBar = () => {
	const { Store } = useContext(Context)

	useEffect(() => {
		fetchCourses().then(item => Store.setCourses(item))
		fetchMentors().then(item => Store.setMentors(item))
		fetchStudents().then(item => Store.setStudents(item))
		fetchQuantity().then(item => Store.setQuantity(item))
	}, [Store, Store.mentors, Store.courses, Store.quantity, Store.students])

	return (
		<div className={styles.sideBar__wrapper}>
			<Link to={'/'}>
				<div className={styles.sideBar__title}>
					<H2
						style={{
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

export default SideBar
