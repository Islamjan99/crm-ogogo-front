import { useContext, useEffect, useState } from 'react'
import {
	fetchCourses,
	fetchCourseType,
	fetchMentors,
	fetchQuantity,
	fetchSubAdmin,
} from '../../Http/API'
import { Context } from '../../index'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import styles from './SideBar.module.css'
import HTag from '../UI/Htag'

const SideBar = () => {
	const { Store } = useContext(Context)
	const [active, setActive] = useState(false)

	useEffect(() => {
		fetchSubAdmin().then(data => Store.setAdmin(data))
		fetchCourseType().then(data => Store.setTypeCourse(data))
		fetchMentors().then(item => Store.setMentors(item))
		fetchCourseType().then(item => Store.setTypeCourse(item))
		fetchCourses().then(item => {
			Store.setCourses(item.response)
			Store.setAllCourse(item.all_data)
			Store.setTotalCount(item.count)
		})
		fetchQuantity(Store.token).then(item => Store.setQuantity(item))
	}, [Store, Store.quantity, Store.token])

	return (
		<div className={active ? 'sideBar__wrapper active' : 'sideBar__wrapper'}>
			<Link to={'/'}>
				<div className={styles.sideBar__title}>
					<HTag
						tag={'h1'}
						style={{
							fontWeight: '500',
							fontSize: '32px',
							lineHeight: '100%',
							color: '#ffffff',
						}}
					>
						OGOGO CRM
					</HTag>
				</div>
			</Link>
			<div
				className={active ? 'burger active' : 'burger'}
				onClick={() => setActive(!active)}
			>
				<span className='material-icons'>chevron_right</span>
			</div>
			<NavBar />
		</div>
	)
}

export default SideBar
