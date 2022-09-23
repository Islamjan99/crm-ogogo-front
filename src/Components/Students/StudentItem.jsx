import React, { useContext, useEffect, useState } from 'react'
import styles from './Students.module.css'
import P from '../UI/P'
import { Context } from '../..'
import { Link, useNavigate } from 'react-router-dom'

const StudentItem = ({ student }) => {
	const { Store } = useContext(Context)
	let navigate = useNavigate()
	const [paid, setPaid] = useState(0)
	const [course, setCourse] = useState({})

	const getCourse = () => {
		Store.allCourses.map(item => {
			if (item.id === student.course) {
				setCourse(item)
			}
		})
	}
	useEffect(() => {
		setPaid(
			student.first_month_paid +
				student.second_month_paid +
				student.third_month_paid +
				student.fourth_month_paid
		)
		getCourse()
	}, [student])
	const changeStudent = str => {
		if (str === 'student') {
			Store.setSelectedStudents(student)
			navigate(`/change-student/${student.id}`)
		} else {
			if (course.name !== undefined) {
				Store.setSelectedStudents(student)
				navigate(`/course-page/${student.id}`)
			} else {
				Store.setSelectedStudents(student)
				navigate(`/change-student/${student.id}`)
			}
		}
	}
	return (
		<div className={styles.student__item}>
			<P
				onClick={() => changeStudent('student')}
				style={{
					fontWeight: '400',
					fontSize: '18px',
					lineHeight: '100%',
					padding: '8px 0',
					cursor: 'pointer',
				}}
			>
				{student.first_name}
			</P>
			<div className={styles.line}></div>
			<P
				onClick={() => changeStudent('student')}
				style={{
					fontWeight: '400',
					fontSize: '18px',
					lineHeight: '100%',
					padding: '8px 0',
					cursor: 'pointer',
				}}
			>
				{student.second_name}
			</P>
			<div className={styles.line}></div>
			<P
				onClick={() => changeStudent('student')}
				style={{
					fontWeight: '400',
					fontSize: '18px',
					lineHeight: '100%',
					padding: '8px 0',
					cursor: 'pointer',
				}}
			>
				{student.phone}
			</P>
			<div className={styles.line}></div>
			<P
				onClick={() => changeStudent('course')}
				style={{
					fontWeight: '400',
					fontSize: '18px',
					lineHeight: '100%',
					padding: '8px 0',
					cursor: 'pointer',
				}}
			>
				{course.name}
			</P>
			<div className={styles.line}></div>
			<P
				onClick={() => changeStudent('student')}
				style={{
					fontWeight: '400',
					fontSize: '18px',
					lineHeight: '100%',
					padding: '8px 0',
					cursor: 'pointer',
				}}
			>
				{paid}
			</P>
			<div className={styles.line}></div>
		</div>
	)
}
export default StudentItem
