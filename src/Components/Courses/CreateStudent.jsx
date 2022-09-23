import React, { useContext, useEffect, useState } from 'react'
import styles from './Courses.module.css'
import { observer } from 'mobx-react-lite'
import Input from '../UI/Input'
import HTag from '../UI/Htag'
import Button from '../UI/Button'
import { Context } from '../..'
import { createStudent } from '../../Http/API'
import Span from '../UI/Span'

const CreateStudent = observer(({ show, setShow, courseId }) => {
	const { Store } = useContext(Context)
	const [student, setStudent] = useState({})

	const changeHandler = event => {
		setStudent({ ...student, [event.target.name]: event.target.value })
	}

	const hidden = async () => {
		await createStudent(student).then(data => console.log(data))
		await setShow(false)
		await window.location.reload()
	}
	useEffect(() => {
		setStudent({ ...student, course: courseId, description: ' ' })
	}, [])

	return (
		<div
			className={
				show ? styles.createCourse__wrapper : styles.createCourse__none
			}
		>
			<div className={styles.createCourse__container}>
				<HTag tag={'h2'} style={{ textAlign: 'center' }}>
					Создание студента
				</HTag>
				<div className={styles.createCourse__block}>
					<form onChange={changeHandler}>
						<Input
							type={'text'}
							name={'first_name'}
							place={'Имя'}
							style={{
								fontSize: '16px',
								borderBottom: '1px solid black',
								width: '150px',
								margin: '0 auto',
							}}
							onChange={changeHandler}
						/>
						<Input
							type={'text'}
							name={'second_name'}
							place={'Фамилия'}
							style={{
								fontSize: '16px',
								borderBottom: '1px solid black',
								width: '150px',
								margin: '0 auto',
							}}
							onChange={changeHandler}
						/>
						<Input
							type={'text'}
							name={'phone'}
							place={'Телефон'}
							style={{
								fontSize: '16px',
								borderBottom: '1px solid black',
								width: '150px',
								margin: '0 auto',
							}}
							onChange={changeHandler}
						/>
						<Input
							type={'text'}
							name={'description'}
							place={'описание'}
							style={{
								fontSize: '16px',
								borderBottom: '1px solid black',
								width: '150px',
								margin: '0 auto',
							}}
							onChange={changeHandler}
						/>
					</form>
					<div className={styles.createCourse__paid}>
						<Input
							type={'number'}
							name={'first_month_paid'}
							place={'Первый месяц'}
							style={{
								fontSize: '16px',
								borderBottom: '1px solid black',
								width: '150px',
								margin: '0 auto',
							}}
							onChange={changeHandler}
						/>
						<Input
							type={'number'}
							name={'second_month_paid'}
							place={'Второй месяц'}
							style={{
								fontSize: '16px',
								borderBottom: '1px solid black',
								width: '150px',
							}}
							onChange={changeHandler}
						/>
						<Input
							type={'number'}
							name={'third_month_paid'}
							place={'Третий месяц'}
							style={{
								fontSize: '16px',
								borderBottom: '1px solid black',
								width: '150px',
								margin: '0 auto',
							}}
							onChange={changeHandler}
						/>
						<Input
							type={'number'}
							name={'fourth_month_paid'}
							place={'Ветвертый месяц'}
							style={{
								fontSize: '16px',
								borderBottom: '1px solid black',
								width: '150px',
								margin: '0 auto',
							}}
							onChange={changeHandler}
						/>
					</div>
				</div>
				<div className={styles.createCourse__btn}>
					<div>
						<Button
							onClick={() => {
								if (
									student.first_name !== undefined &&
									student.second_name !== undefined &&
									student.phone !== undefined &&
									student.first_name !== '' &&
									student.second_name !== '' &&
									student.phone !== ''
								) {
									hidden()
								}
							}}
							style={
								student.first_name !== undefined &&
								student.second_name !== undefined &&
								student.phone !== undefined &&
								student.first_name !== '' &&
								student.second_name !== '' &&
								student.phone !== ''
									? {
											padding: '12px 15px',
											cursor: 'pointer',
											borderRadius: '10px',
											fontSize: '16px',
											background: 'rgb(106, 199, 106)',
											border: 'rgb(106, 199, 106)',
											fontWeight: '500',
									  }
									: {
											padding: '12px 15px',
											cursor: 'pointer',
											borderRadius: '10px',
											fontSize: '16px',
											background: 'rgba(106, 199, 106)',
											opacity: '0.5',
											border: 'rgb(106, 199, 106)',
											fontWeight: '500',
									  }
							}
						>
							Создать курс
						</Button>
					</div>
					<div>
						<Button
							onClick={() => setShow(false)}
							style={{
								padding: '12px 15px',
								cursor: 'pointer',
								borderRadius: '10px',
								fontSize: '16px',
								background: 'rgb(252, 16, 16)',
								fontWeight: '500',
							}}
						>
							Отмена
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
})

export default CreateStudent
