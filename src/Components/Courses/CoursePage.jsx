import React, { useContext, useEffect, useState } from 'react'
import styles from './Courses.module.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Context } from '../..'
import { deleteCourse, fetchCoursePage, updateCourse } from '../../Http/API'
import P from '../UI/P'
import { observer } from 'mobx-react-lite'
import Input from '../UI/Input'
import Button from '../UI/Button'
import Modals from '../../Modals'
import Span from '../UI/Span'
import CreateStudent from './CreateStudent'

const CoursePage = observer(() => {
	let navigate = useNavigate()
	const { Store } = useContext(Context)
	const [isOpen, setIsOpen] = useState(false)
	const [courses, setCourses] = useState({})
	const [coursesType, setCoursesType] = useState({})
	const [students, setStudents] = useState([])

	const [hidden, setHidden] = useState(false)
	const [message, setMessage] = useState()
	const [fun, setFun] = useState()

	let courseIdpage = useParams().id
	courseIdpage = Number(courseIdpage)

	const getCourse = async () => {
		let i
		await fetchCoursePage(courseIdpage).then(data => {
			Store.setSelectedMentor(data.data.mentor)
			data.data.mentor = data.data.mentor.id
			i = data.data.type
			setCourses(data.data)
			setStudents(data.data.students)
		})
		await Store.typeCourse.map(item => {
			item.id === i && setCoursesType(item)
		})
	}
	const setInfo = event => {
		setCourses({
			...courses,
			[event.target.name]: event.target.value,
		})
	}
	const addInfo = () => {
		delete courses.students
		delete courses.students_count

		updateCourse(courseIdpage, courses)

		navigate('/courses')
	}
	const courseDelete = async () => {
		await deleteCourse(courseIdpage)
		await navigate('/courses')
		await window.location.reload()
	}
	const check = async str => {
		if (str === 'сохранить') {
			setFun(true)
			setHidden(true)
			setMessage('Сохранить изменения')
		} else {
			setFun(false)
			setHidden(true)
			setMessage('Вы действительно хотите удалить ученика')
		}
	}
	const addMentor = mentor => {
		Store.setSelectedMentor(mentor)
		setCourses({ ...courses, mentor: mentor.id })
	}
	const addCourseType = async types => {
		await setCourses({ ...courses, type: types.id })
		await setCoursesType(types)
		await Store.setSelectedTypeCourse(types)
	}
	useEffect(() => {
		getCourse()
	}, [])

	return (
		<div className={styles.coursePage__wrapper}>
			<div className={styles.typeCourse__container}>
				<div className={styles.typeCourse}>
					<P>Тип курса: </P>
					<div className={styles.dropdownType}>
						<div tabIndex={1} className={styles.dropdownType__select}>
							<span className={styles.selectType}>{coursesType.type}</span>
						</div>
						<div className={styles.dropdownType__list}>
							{Store.typeCourse.map((item, index) => {
								return (
									<div
										key={index}
										onClick={() => addCourseType(item)}
										className={styles.dropdownType__list__item}
									>
										{item.type}
									</div>
								)
							})}
						</div>
					</div>
				</div>
				<div>
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
						Создать студента
					</Button>
				</div>
			</div>
			<div className={styles.coursePage__title}>
				<div className={styles.addMentor}>
					<Span style={{ marginRight: '5px' }}>Ментор: </Span>
					<div className={styles.dropdownMentor}>
						<div tabIndex={1} className={styles.dropdownMentor__select}>
							<span className={styles.select}>
								{Store.selectedMentor.second_name}
							</span>
						</div>
						<div className={styles.dropdownMentor__list}>
							{Store.mentors.map((item, index) => {
								return (
									<div
										key={index}
										onClick={() => addMentor(item)}
										className={styles.dropdownMentor__list__item}
									>
										{item.second_name}
									</div>
								)
							})}
						</div>
					</div>
				</div>
				<div>
					<Span style={{ marginRight: '5px' }}>Название:</Span>
					<Input
						type={'text'}
						name={'name'}
						value={courses.name}
						onChange={e => setInfo(e)}
						place={'Введите название курса'}
						style={{
							width: '130px',
							fontWeight: '500',
							fontSize: '16px',
							color: 'white',
						}}
					/>
				</div>
				<P>
					Описание:
					<Input
						name={'description'}
						type={'text'}
						value={courses.description}
						place={'Введите Адрес'}
						onChange={e => setInfo(e)}
						style={{
							width: '130px',
							fontWeight: '500',
							fontSize: '16px',
							color: 'white',
							marginLeft: '5px',
						}}
					/>
				</P>
				<P>
					Адрес:
					<Input
						name={'address'}
						type={'text'}
						value={courses.address}
						place={'Введите Адрес'}
						onChange={e => setInfo(e)}
						style={{
							width: '130px',
							fontWeight: '500',
							fontSize: '16px',
							color: 'white',
							marginLeft: '5px',
						}}
					/>
				</P>
				<P>
					Дата начала:
					<Input
						type={'date'}
						name={'start_date'}
						value={courses.start_date}
						onChange={e => setInfo(e)}
						style={{
							width: '120px',
							fontWeight: '500',
							fontSize: '16px',
							color: 'white',
							marginLeft: '5px',
						}}
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
					onClick={() => check('сохранить')}
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
					onClick={() => check('удалить')}
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
					Заархивировать курс
				</Button>
			</div>
			<div className={hidden ? styles.modal : styles.modal__none}>
				<Modals
					show={hidden}
					setShow={setHidden}
					fun={fun ? addInfo : courseDelete}
					info={message}
				/>
			</div>
			<CreateStudent
				show={isOpen}
				setShow={setIsOpen}
				courseId={courseIdpage}
			/>
		</div>
	)
})

export default CoursePage
