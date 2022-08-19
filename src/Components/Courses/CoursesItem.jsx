import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../..'
import P from '../UI/P'
import styles from './Courses.module.css'

const CoursesItem = ({ courses }) => {
	const { Store } = useContext(Context)
	const [mentor, setMentor] = useState([])
	const getMentor = () => {
		Store.mentors.map(item => {
			if (item.id == courses.mentor) {
				setMentor({
					...mentor,
					name: item.name,
					secondName: item.second_name,
					phone: item.phone,
				})
				console.log(item.name)
			} else {
			}
		})
	}
	useEffect(() => {
		getMentor()
	}, [])

	return (
		<div className={styles.courses__item}>
			<P
				style={{
					fontFamily: 'Gilroy',
					fontStyle: 'normal',
					fontWeight: '400',
					fontSize: '16px',
					lineHeight: '100%',
					color: '#FFFFFF',
					background: '#5928e5',
					padding: '10px',
					borderRadius: '20px 20px 0 0',
				}}
			>
				{courses.name} : {courses.start_date}
			</P>
			<P>
				Ментор:{mentor.secondName} {mentor.name}
			</P>
		</div>
	)
}

export default CoursesItem
