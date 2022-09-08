import React, { useContext, useState } from 'react'
import styles from './Courses.module.css'
import { observer } from 'mobx-react-lite'
import Input from '../UI/Input'
import P from '../UI/P'
import H2 from '../UI/H2'
import Button from '../UI/Button'
import { Context } from '../..'
import { createCourse } from '../../Http/API'

const CreateCourse = observer(({ show, setShow }) => {
	const { Store } = useContext(Context)
	const [course, setCourse] = useState({})

	const changeHandler = event => {
		setCourse({ ...course, [event.target.name]: event.target.value })
	}

	const hidden = () => {
		createCourse(course).then(data => console.log(data))
		setShow(false)
		window.location.reload()
	}
	const addMentor = mentor => {
		Store.setSelectedMentor(mentor)
		setCourse({ ...course, mentor: mentor.id })
	}

	return (
		<div
			className={
				show ? styles.createCourse__wrapper : styles.createCourse__none
			}
		>
			<div className={styles.createCourse__container}>
				<H2 style={{ textAlign: 'center' }}>Создание курса</H2>
				<div className={styles.createCourse__block}>
					<form onChange={changeHandler}>
						<div className={styles.dropdown}>
							<div tabIndex={1} className={styles.dropdown__select}>
								<span className={styles.select}>
									{Store.selectedMentor.name || 'Выберите ментора'}
								</span>
							</div>
							<div className={styles.dropdown__list}>
								{Store.mentors.map((item, index) => {
									return (
										<div
											key={index}
											onClick={() => addMentor(item)}
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
							name={'name'}
							place={'Название'}
							style={{ fontSize: '16px', borderBottom: '1px solid black' }}
							onChange={changeHandler}
						/>
						<Input
							type={'text'}
							name={'address'}
							place={'Адрес'}
							style={{ fontSize: '16px', borderBottom: '1px solid black' }}
							onChange={changeHandler}
						/>
						<Input
							type={'text'}
							name={'description'}
							place={'Описание'}
							style={{ fontSize: '16px', borderBottom: '1px solid black' }}
							onChange={changeHandler}
						/>
						<Input
							type={'date'}
							name={'start_date'}
							place={'Дата старта'}
							style={{ fontSize: '16px', borderBottom: '1px solid black' }}
							onChange={changeHandler}
						/>
					</form>
				</div>
				<div className={styles.createCourse__btn}>
					<div>
						<Button
							onClick={() => {
								if (
									course.name !== undefined &&
									course.address !== undefined &&
									course.description !== undefined &&
									course.start_date !== undefined &&
									course.name !== '' &&
									course.address !== '' &&
									course.description !== '' &&
									course.start_date !== ''
								) {
									hidden()
								}
							}}
							style={
								course.name !== undefined &&
								course.address !== undefined &&
								course.description !== undefined &&
								course.start_date !== undefined &&
								course.name !== '' &&
								course.address !== '' &&
								course.description !== '' &&
								course.start_date !== ''
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

export default CreateCourse
