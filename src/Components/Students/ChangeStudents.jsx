import React, { useContext, useEffect, useState } from 'react'
import styles from './Students.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import { Context } from '../..'
import P from '../UI/P'
import { observer } from 'mobx-react-lite'
import Input from '../UI/Input'
import Span from '../UI/Span'
import { fetchCoursePage, fetchStudentOne, updateStudent } from '../../Http/API'
import Button from '../UI/Button'

const ChangeStudents = observer(() => {
	const { Store } = useContext(Context)
	let navigate = useNavigate()
	const [loading, setLoading] = useState(true)
	const [courses, setCourses] = useState({})
	const [changeStudent, setChangeStudent] = useState({})
	const [paid, setPaid] = useState(0)
	let id = Number(useParams().id)

	const getStudent = async () => {
		let data = {}
		try {
			await fetchStudentOne(id).then(datas => (data = datas.data))
			await fetchCoursePage(data.course).then(data => setCourses(data.data))

			await setLoading(false)
		} catch (e) {
			navigate('/students')
		}
		setPaid(data.paid)
		setChangeStudent(data)
	}

	useEffect(() => {
		getStudent()
	}, [])

	const setInfo = event => {
		if (event.target.name !== 'course') {
			setChangeStudent({
				...changeStudent,
				[event.target.name]: event.target.value,
			})
			console.log(changeStudent)
		} else {
			setCourses({ ...courses, [event.target.name]: event.target.value })
		}
	}

	const changePaid = event => {
		let value = Number(event.target.value)
		setPaid({ ...paid, [event.target.name]: value })
	}

	const addCourse = str => {
		setCourses(str)
		setChangeStudent({ ...changeStudent, course: str.id })
	}

	const upDatecheck = async () => {
		console.log(changeStudent)
		// updateStudent(id, course)
	}
	if (loading) {
		return (
			<div className='ani'>
				<div className='block'>
					<Span className='ani__l'>L</Span>
					<Span className='ani__o'>o</Span>
					<Span className='ani__a'>a</Span>
					<Span className='ani__d'>d</Span>
					<Span className='ani__i'>i</Span>
					<Span className='ani__n'>n</Span>
					<Span className='ani__g'>g</Span>
					<Span className='ani__1'>.</Span>
					<Span className='ani__2'>.</Span>
					<Span className='ani__3'>.</Span>
				</div>
			</div>
		)
	}

	return (
		<div className={styles.changeStudents__wrapper}>
			<div className={styles.changeStudents__info}>
				<div className={styles.changeStudents__title}>
					<Input
						type={'text'}
						name={'second_name'}
						value={changeStudent.second_name}
						onChange={e => setInfo(e)}
						style={{
							fontWeight: '600',
							fontSize: '18px',
							width: '100px',
							borderRadius: '5px',
						}}
					/>
					<Input
						type={'text'}
						name={'first_name'}
						value={changeStudent.first_name}
						onChange={e => setInfo(e)}
						style={{
							fontWeight: '600',
							fontSize: '18px',
							width: '100px',
							borderRadius: '5px',
							marginLeft: '10px',
						}}
					/>
				</div>
				<div className={styles.changeStudents__block}>
					<div className={styles.student__title}>
						<P
							style={{
								marginBottom: '15px',
							}}
						>
							Телефона:
						</P>
						<P
							style={{
								marginBottom: '21px',
							}}
						>
							Описание:
						</P>
						<P
							style={{
								marginBottom: '28px',
							}}
						>
							Курс:
						</P>
						<P
							style={{
								marginBottom: '10px',
							}}
						>
							Оплата:
						</P>
					</div>
					<div className={styles.student__info}>
						<Input
							type={'text'}
							name={'phone'}
							value={changeStudent.phone}
							onChange={e => setInfo(e)}
							style={{
								fontWeight: '600',
								fontSize: '18px',
								width: '200px',
								borderRadius: '5px',
								marginLeft: '10px',
								marginBottom: '13px',
								height: '20px',
							}}
						/>
						<Input
							type={'text'}
							name={'description'}
							value={changeStudent.description}
							onChange={e => setInfo(e)}
							style={{
								fontWeight: '600',
								fontSize: '18px',
								width: '200px',
								borderRadius: '5px',
								marginLeft: '10px',
								height: '20px',
							}}
						/>
						<div className={styles.dropdown}>
							<div tabIndex={1} className={styles.dropdown__select}>
								<span className={styles.select}>
									{courses.name || 'Выберите курс'}
								</span>
							</div>
							<div className={styles.dropdown__list}>
								{Store.courses.map((item, index) => {
									return (
										<div
											key={index}
											onClick={() => addCourse(item)}
											className={styles.dropdown__list__item}
										>
											{item.name}
										</div>
									)
								})}
							</div>
						</div>
						<Span
							style={{
								marginLeft: '10px',
								height: '20px',
							}}
						>
							{paid.first_month_paid +
								paid.second_month_paid +
								paid.third_month_paid +
								paid.fourth_month_paid}
						</Span>
					</div>

					<div className={styles.student__paid}>
						<P
							style={{
								fontWeight: '600',
								fontSize: '18px',
								lineHeight: '28px',
							}}
						>
							1 Месяц
						</P>
						<P
							style={{
								fontWeight: '600',
								fontSize: '18px',
								lineHeight: '28px',
							}}
						>
							2 Месяц
						</P>
						<P
							style={{
								fontWeight: '600',
								fontSize: '18px',
								lineHeight: '28px',
							}}
						>
							3 Месяц
						</P>
						<P
							style={{
								fontWeight: '600',
								fontSize: '18px',
								lineHeight: '28px',
							}}
						>
							4 Месяц
						</P>
						<Input
							type={'number'}
							name={'first_month_paid'}
							value={paid.first_month_paid}
							onChange={e => changePaid(e)}
							style={{
								fontWeight: '600',
								fontSize: '18px',
								width: '145px',
								borderRadius: '5px',
								height: '20px',
							}}
						/>
						<Input
							type={'number'}
							name={'second_month_paid'}
							value={paid.second_month_paid}
							onChange={e => changePaid(e)}
							style={{
								fontWeight: '600',
								fontSize: '18px',
								width: '145px',
								borderRadius: '5px',
								height: '20px',
							}}
						/>
						<Input
							type={'text'}
							name={'third_month_paid'}
							value={paid.third_month_paid}
							onChange={e => changePaid(e)}
							style={{
								fontWeight: '600',
								fontSize: '18px',
								width: '145px',
								borderRadius: '5px',
								height: '20px',
							}}
						/>
						<Input
							type={'text'}
							name={'fourth_month_paid'}
							value={paid.fourth_month_paid}
							onChange={e => changePaid(e)}
							style={{
								fontWeight: '600',
								fontSize: '18px',
								width: '145px',
								borderRadius: '5px',
								height: '20px',
							}}
						/>
					</div>
					<div></div>
				</div>
			</div>
			<div className={styles.changeStudents__btn}>
				<Button
					onClick={() => upDate()}
					style={{
						padding: '12px 15px',
						cursor: 'pointer',
						borderRadius: '10px',
						fontSize: '16px',
						background: 'rgb(106, 199, 106)',
						border: 'rgb(106, 199, 106)',
						fontWeight: '500',
					}}
				>
					Сохранить
				</Button>
				<Button
					style={{
						padding: '12px 15px',
						cursor: 'pointer',
						borderRadius: '10px',
						fontSize: '16px',
						background: 'rgb(252, 16, 16)',
						fontWeight: '500',
					}}
				>
					Удалить ученика
				</Button>
			</div>
		</div>
	)
})

export default ChangeStudents
