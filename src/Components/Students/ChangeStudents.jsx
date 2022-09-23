import React, { useContext, useEffect, useState } from 'react'
import styles from './Students.module.css'
import '../../Global.css'
import { useNavigate, useParams } from 'react-router-dom'
import { Context } from '../..'
import P from '../UI/P'
import { observer } from 'mobx-react-lite'
import Input from '../UI/Input'
import Span from '../UI/Span'
import {
	deleteStudent,
	fetchCoursePage,
	fetchStudentOne,
	updateStudent,
} from '../../Http/API'
import Button from '../UI/Button'
import Modals from '../../Modals'

const ChangeStudents = observer(() => {
	const { Store } = useContext(Context)
	let navigate = useNavigate()
	const [loading, setLoading] = useState(true)
	const [hidden, setHidden] = useState(false)
	const [courses, setCourses] = useState({})
	const [changeStudent, setChangeStudent] = useState({})
	const [paid, setPaid] = useState({})
	const [message, setMessage] = useState()
	const [fun, setFun] = useState()

	let id = Number(useParams().id)

	const getStudent = async () => {
		let data = {}
		try {
			await fetchStudentOne(id).then(datas => (data = datas.data))
			data.course !== null &&
				(await fetchCoursePage(data.course).then(data => setCourses(data.data)))
			setPaid({
				...paid,
				first_month_paid: data.first_month_paid,
				second_month_paid: data.first_month_paid,
				third_month_paid: data.third_month_paid,
				fourth_month_paid: data.fourth_month_paid,
			})

			await setLoading(false)
		} catch (e) {
			navigate('/students')
		}

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
		} else {
			setCourses({ ...courses, [event.target.name]: event.target.value })
		}
	}

	const addCourse = str => {
		setCourses(str)
		setChangeStudent({ ...changeStudent, course: str.id })
	}
	const changePaid = async event => {
		let value = await Number(event.target.value)
		await setChangeStudent({
			...changeStudent,
			[event.target.name]: value,
		})
		await setPaid({ ...changeStudent, [event.target.name]: value })
	}

	const check = async str => {
		if (str === 'сохранить') {
			setFun(true)
			setHidden(true)
			setMessage('Сохранить изменения!')
		} else {
			setFun(false)
			setHidden(true)
			setMessage('Вы действительно хотите удалить ученика?')
		}
	}

	const upDate = async () => {
		await updateStudent(id, changeStudent).then(data => console.log(data))
		await navigate('/students')
		await window.location.reload()
	}
	const studentDelete = async () => {
		await deleteStudent(id).then(data => console.log(data))
		await navigate('/students')
		await window.location.reload()
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
								marginBottom: '23px',
								marginTop: '12px',
							}}
						>
							Курс:
						</P>
						<P
							style={{
								marginBottom: '15px',
							}}
						>
							Телефона:
						</P>
						<P
							style={{
								marginBottom: '10px',
							}}
						>
							Описание:
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
							value={changeStudent.first_month_paid}
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
							value={changeStudent.second_month_paid}
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
							name={'third_month_paid'}
							value={changeStudent.third_month_paid}
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
							name={'fourth_month_paid'}
							value={changeStudent.fourth_month_paid}
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
					onClick={() => check('сохранить')}
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
					onClick={() => check('удалить')}
					style={{
						padding: '12px 15px',
						cursor: 'pointer',
						borderRadius: '10px',
						fontSize: '16px',
						background: 'rgb(252, 16, 16)',
						border: 'rgb(252, 16, 16))',
						fontWeight: '500',
					}}
				>
					Удалить ученика
				</Button>
				<div className={hidden ? styles.modal : styles.modal__none}>
					<Modals
						show={hidden}
						setShow={setHidden}
						fun={fun ? upDate : studentDelete}
						info={message}
					/>
				</div>
			</div>
		</div>
	)
})

export default ChangeStudents
