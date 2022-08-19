import React, { useContext, useEffect, useState } from 'react'
import { fetchCourses } from '../../Http/API'
import { Context } from '../../index'
import Button from '../UI/Button'
import H1 from '../UI/H1'
import styles from './Courses.module.css'
import CoursesItem from './CoursesItem'

const Course = () => {
	const { Store } = useContext(Context)
	const [isOpen, setIsOpen] = useState(false)
	const [mentor, setMentor] = useState([])
	const getMentor = () => {
		fetchCourses().then(item => setMentor(item))
	}
	useEffect(() => {
		if (mentor.length < 1) {
			getMentor()
		}
	}, [mentor])

	return (
		<div className={styles.course__wrapper}>
			<div className={styles.course__container}>
				<div className={styles.course__title}>
					<H1
						style={{
							fontWeight: '500',
							fontSize: '100px',
							lineHeight: '100%',
							color: '#000000',
						}}
					>
						Менторы
					</H1>
					<div className={styles.create__mentor}>
						<Button
							onClick={() => setIsOpen(true)}
							style={{
								padding: '12px 15px',
								fontSize: '18px',
								cursor: 'pointer',
							}}
						>
							Добавить ментора
						</Button>
					</div>
				</div>
				<div>
					{Store.courses.map(courses => {
						return <CoursesItem key={courses.id} courses={courses} />
					})}
				</div>
			</div>
		</div>
	)
}

export default Course
