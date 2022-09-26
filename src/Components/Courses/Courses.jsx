import { observer } from 'mobx-react-lite'
import styles from './Courses.module.css'
import '../../Global.css'
import React, { useContext, useEffect, useState } from 'react'
import { fetchArchiveCourses, fetchCourses } from '../../Http/API'
import { Context } from '../../index'
import Pagin from '../Pagin'
import Button from '../UI/Button'
import HTag from '../UI/Htag'
import CoursesItem from './CoursesItem'
import CreateCourse from './CreateCourse'
import ShirtSkeleton from '../ShirtBlock/ShirtSkeleton'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Course = observer(() => {
	const { Store } = useContext(Context)
	let location = useLocation()
	let navigate = useNavigate()
	const [isOpen, setIsOpen] = useState(false)
	const [loading, setLoading] = useState(true)
	const [courses, setCourses] = useState([])
	const [course, setCourse] = useState([])

	useEffect(() => {
		if (location.pathname !== '/archive-courses') {
			fetchCourses(Store.page).then(item => {
				setCourses(item.response)
				setTimeout(() => {
					setLoading(false)
				}, 500)
			})
		} else {
			fetchArchiveCourses(Store.page).then(item => {
				setCourses(item)
				setTimeout(() => {
					setLoading(false)
				}, 500)
			})
		}
	}, [Store.page, Store.courses, location.pathname])

	const getInfo = id => {
		Store.courses.map(item => {
			if (item.id === id) {
				course.push(item)
			}
		})
	}

	return (
		<div className={styles.course__wrapper}>
			<div className={styles.course__container}>
				<div className={styles.course__title}>
					<HTag
						tag={'h1'}
						style={{
							fontWeight: '500',
							fontSize: '55px',
							lineHeight: '100%',
							color: '#000000',
						}}
					>
						{location.pathname !== '/archive-courses'
							? 'Курсы'
							: 'Архив курсов'}
					</HTag>
					<div className={styles.create__courses}>
						<Button
							onClick={() => {
								location.pathname !== '/archive-courses'
									? navigate('/archive-courses')
									: navigate('/courses')
							}}
							style={{
								width: '100px',
								padding: '12px 15px',
								fontSize: '16px',
								cursor: 'pointer',
								background: 'rgb(106, 199, 106)',
								border: 'rgb(106, 199, 106)',
								borderRadius: '10px',
								marginRight: '10px',
							}}
						>
							{location.pathname !== '/archive-courses' ? 'Архив' : 'курсы'}
						</Button>
						<Button
							onClick={() => setIsOpen(true)}
							style={{
								width: '200px',
								padding: '12px 15px',
								fontSize: '18px',
								cursor: 'pointer',
								background: 'rgb(106, 199, 106)',
								border: 'rgb(106, 199, 106)',
								borderRadius: '10px',
							}}
						>
							Добавить курс
						</Button>
					</div>
				</div>
				<div className={styles.courses__block}>
					{loading
						? [...new Array(5)].map((_, index) => <ShirtSkeleton key={index} />)
						: courses.map(course => (
								<Link
									to={
										location.pathname !== '/archive-courses'
											? `/course-page/${course.id}`
											: `/archive-course-page/${courses.id}`
									}
								>
									<CoursesItem key={course.id} courses={course} />
								</Link>
						  ))}
				</div>
			</div>

			<CreateCourse show={isOpen} setShow={setIsOpen} />

			{location.pathname !== '/archive-courses' && <Pagin />}
		</div>
	)
})

export default Course
