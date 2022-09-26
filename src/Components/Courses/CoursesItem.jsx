import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../..'
import { fetchMentorPage } from '../../Http/API'
import P from '../UI/P'
import Span from '../UI/Span'
import styles from './Courses.module.css'

const CoursesItem = ({ courses }) => {
	const [mentor, setMentor] = useState({})

	useEffect(() => {
		fetchMentorPage(courses.mentor).then(data => {
			setMentor(data.data)
		})
	}, [])
	return (
		<div className={styles.courses__item}>
			<P
				style={{
					fontFamily: 'Gilroy',
					fontStyle: 'normal',
					fontWeight: '500',
					fontSize: '16px',
					lineHeight: '100%',
					color: '#FFFFFF',
					background: '#5928e5',
					padding: '10px',
					borderRadius: '20px 20px 0 0',
				}}
			>
				{`${courses.name} `}
				<Span
					style={{
						fontFamily: 'Gilroy',
						fontStyle: 'normal',
						fontWeight: '400',
						fontSize: '16px',
						lineHeight: '100%',
					}}
				>
					: {courses.start_date}
				</Span>
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
						{mentor.second_name !== undefined
							? ` ${mentor.second_name}`
							: ' ментор не выбран'}
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
					<span className={styles.description}>
						{courses.description !== null && ` ${courses.description}`}
					</span>
				</P>
			</div>
		</div>
	)
}

export default CoursesItem
