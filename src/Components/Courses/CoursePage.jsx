import React, { useContext, useEffect, useState } from 'react'
import styles from './Courses.module.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Context } from '../..'
import { fetchCoursePage, updateCourse } from '../../Http/API'
import P from '../UI/P'
import { observer } from 'mobx-react-lite'
import Input from '../UI/Input'
import Button from '../UI/Button'

const CoursePage = observer(() => {
	let navigate = useNavigate()
	const { Store } = useContext(Context)
	const [courses, setCourses] = useState({})
	const [mentor, setMentor] = useState({})
	const [students, setStudents] = useState([])
	const [paid, setPaid] = useState(0)

	let courseIdpage = useParams().id
	courseIdpage = Number(courseIdpage)

	const getCourse = () => {
		fetchCoursePage(courseIdpage).then(data => {
			if (data) {
				setMentor(data.mentor)
				setCourses(data)
				setStudents(data.students)
			}
		})
	}
	const setInfo = event => {
		setCourses({
			...courses,
			[event.target.name]: event.target.value,
		})
	}
	const addInfo = () => {
		console.log(courses)
		updateCourse(courseIdpage, courses)
		navigate('/courses')
	}
	const deleteCourse = () => {
		deleteCourse(courseIdpage)
	}

	useEffect(() => {
		getCourse()
	}, [])
	return (
		<div className={styles.coursePage__wrapper}>
			<div className={styles.coursePage__title}>
				<P>Ментор: {mentor.second_name}</P>
				<P>
					Группа:
					<Input
						style={{
							width: '130px',
							fontWeight: '500',
							fontSize: '16px',
							color: 'white',
						}}
						name={'second_name'}
						type={'text'}
						place={courses.name}
						onChange={e => setInfo(e)}
					/>
				</P>
				<P>
					Адрес:{' '}
					<Input
						style={{
							width: '130px',
							fontWeight: '500',
							fontSize: '16px',
							color: 'white',
						}}
						name={'second_name'}
						type={'text'}
						place={courses.address}
						onChange={e => setInfo(e)}
					/>
				</P>
				<P>
					Дата начала:{' '}
					<Input
						style={{
							width: '120px',
							fontWeight: '500',
							fontSize: '16px',
							color: 'white',
						}}
						name={'second_name'}
						type={'text'}
						// value={courses.start_date}
						place={courses.start_date}
					/>
				</P>
			</div>
			<div className={styles.coursePage__info}>
				<P
					style={{
						fontWeight: '500',
						fontSize: '18px',
						lineHeight: '100%',
						padding: ' 5px 0',
					}}
				>
					Имя
				</P>
				<div className={styles.line}></div>
				<P
					style={{
						fontWeight: '500',
						fontSize: '18px',
						lineHeight: '100%',
						padding: ' 5px 0',
					}}
				>
					Фамилия
				</P>
				<div className={styles.line}></div>
				<P
					style={{
						fontWeight: '500',
						fontSize: '18px',
						lineHeight: '100%',
						color: '#7000FF',
						padding: ' 5px 0',
					}}
				>
					Номер телефона
				</P>
				<div className={styles.line}></div>
				<P
					style={{
						fontWeight: '500',
						fontSize: '18px',
						lineHeight: '100%',
						color: '#00FF29',
						padding: ' 5px 0',
					}}
				>
					Оплата
				</P>
			</div>
			<div className={styles.coursePage__students}>
				{students.map((student, index) => {
					return (
						<Link key={index} to={`/change-student/${student.id}`}>
							<div className={styles.student__item}>
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
									{student.first_month_paid +
										student.fourth_month_paid +
										student.second_month_paid +
										student.third_month_paid}
								</P>

								<div className={styles.line}></div>
							</div>
						</Link>
					)
				})}
			</div>
			<div className={styles.coursePage__btn}>
				<Button
					onClick={() => addInfo()}
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
					Сохранить
				</Button>
				<Button
					onClick={() => deleteCourse()}
					style={{
						width: '200px',
						padding: '12px 15px',
						cursor: 'pointer',
						borderRadius: '10px',
						fontSize: '16px',
						background: 'rgb(252, 16, 16)',
						border: 'rgb(106, 199, 106)',
						fontWeight: '600',
					}}
				>
					Удалить курс
				</Button>
			</div>
		</div>
	)
})

export default CoursePage
