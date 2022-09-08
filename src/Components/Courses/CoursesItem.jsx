import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../..'
import P from '../UI/P'
import Span from '../UI/Span'
import styles from './Courses.module.css'

const CoursesItem = ({ courses }) => {
	const { Store } = useContext(Context)
	const [mentor, setMentor] = useState([])
	const getMentor = () => {
		Store.mentors.map(item => {
			if (item.id === courses.mentor) {
				setMentor({
					...mentor,
					name: item.name,
					secondName: item.second_name,
					phone: item.phone,
				})
			}

			return mentor
		})
	}
	useEffect(() => {
		if (mentor.length < 1) {
			getMentor()
		}
	})
	return (
		<Link to={`/course-page/${courses.id}`}>
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
				<div className={styles.item__mentor}>
					<P style={{ color: '#5C5C5C' }}>
						Ментор:
						<Span
							style={{
								fontWeight: '600',
								fontSize: '16px',
								lineHeight: '28px',
								color: '#000000',
							}}
						>
							{` ${mentor.secondName}`}
						</Span>
					</P>
					<P style={{ color: '#5C5C5C' }}>
						Адрес:
						<Span
							style={{
								fontWeight: '600',
								fontSize: '16px',
								lineHeight: '28px',
								color: '#000000',
							}}
						>
							{` ${courses.address}`}
						</Span>
					</P>
					<P style={{ color: '#5C5C5C' }}>
						Количестко учеников:
						<span
							style={{
								fontWeight: '600',
								fontSize: '16px',
								lineHeight: '28px',
								color: '#000000',
							}}
						>{` ${courses.student_count}`}</span>
					</P>
					<P style={{ color: '#5C5C5C' }}>
						Описание:
						<span
							className={styles.description}
						>{` ${courses.description}`}</span>
					</P>
				</div>
			</div>
		</Link>
	)
}

export default CoursesItem
