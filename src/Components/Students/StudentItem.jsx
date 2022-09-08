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
		Store.courses.map(item => {
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
	const changeStudent = () => {
		Store.setSelectedStudents(student)
		navigate(`/change-student/${student.id}`)
	}
	return (
		<div className={styles.student__item} onClick={changeStudent}>
			<P
				style={{
					fontWeight: '400',
					fontSize: '18px',
					lineHeight: '100%',
					padding: '8px 0',
				}}
			>
				{student.first_name}
			</P>
			<div className={styles.line}></div>
			<P
				style={{
					fontWeight: '400',
					fontSize: '18px',
					lineHeight: '100%',
					padding: '8px 0',
				}}
			>
				{student.second_name}
			</P>
			<div className={styles.line}></div>
			<P
				style={{
					fontWeight: '400',
					fontSize: '18px',
					lineHeight: '100%',
					padding: '8px 0',
				}}
			>
				{student.phone}
			</P>
			<div className={styles.line}></div>
			<P
				style={{
					fontWeight: '400',
					fontSize: '18px',
					lineHeight: '100%',
					padding: '8px 0',
				}}
			>
				{course.name}
			</P>
			<div className={styles.line}></div>
			<P
				style={{
					fontWeight: '400',
					fontSize: '18px',
					lineHeight: '100%',
					padding: '8px 0',
				}}
			>
				{paid}
			</P>
			<div className={styles.line}></div>
		</div>
	)
}
export default StudentItem
