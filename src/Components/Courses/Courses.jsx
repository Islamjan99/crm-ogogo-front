import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { fetchCourses } from '../../Http/API'
import { Context } from '../../index'
// import Pagin from '../Pagin'
import Button from '../UI/Button'
import H1 from '../UI/H1'
import styles from './Courses.module.css'
import CoursesItem from './CoursesItem'
import CreateCourse from './CreateCourse'

const Course = observer(() => {
	const { Store } = useContext(Context)
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className={styles.course__wrapper}>
			<div className={styles.course__container}>
				<div className={styles.course__title}>
					<H1
						style={{
							fontWeight: '500',
							fontSize: '55px',
							lineHeight: '100%',
							color: '#000000',
						}}
					>
						Курсы
					</H1>
					<div className={styles.create__courses}>
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
					{Store.courses.map(courses => {
						return <CoursesItem key={courses.id} courses={courses} />
					})}
				</div>
			</div>

			<CreateCourse show={isOpen} setShow={setIsOpen} />

			{/* <Pagin /> */}
		</div>
	)
})

export default Course
