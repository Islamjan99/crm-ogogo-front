import React, { useContext, useEffect, useState } from 'react'
import styles from './Mentor.module.css'
import { Redirect, useParams } from 'react-router-dom'
import { Context } from '../../index'
import P from '../UI/P'
import Input from '../UI/Input'
import Button from '../UI/Button'

const ChangeMentor = () => {
	const { MentorsStore } = useContext(Context)
	const [mentor, setMentor] = useState([])
	const [mentorInfo, setMentorInfo] = useState([])
	const [changementor, setChangeMentor] = useState(['as'])
	let mentorId = useParams().id

	useEffect(() => {
		if (mentor.length < 1) {
			getItem()
		}
	}, [mentor])
	const getItem = () => {
		let i = MentorsStore.mentors.filter((item, index) => mentorId == index)
		i.map(item =>
			setChangeMentor({
				...changementor,
				name: item.name,
				second_name: item.second_name,
				phone: item.phone,
			})
		)

		setMentor(i)
	}
	const setInfo = event => {
		setChangeMentor({
			...changementor,
			[event.target.name]: event.target.value,
		})
	}
	let form = [
		{ type: 'text', name: 'name', placeholder: `${changementor.name}` },
		{
			type: 'text',
			name: 'second_name',
			placeholder: `${changementor.second_name}`,
		},
		{ type: 'text', name: 'phone', placeholder: `${changementor.phone}` },
	]
	return (
		<div className={styles.changeMentor__wrapper}>
			<div className={styles.changeMentor__container}>
				<div>
					<div className={styles.changeMentor__info}>
						<P>Имя</P>
						<P>Фамилия</P>
						<P>телефон</P>
						<P>Кол. занятий за 1 мес.</P>
					</div>
					{mentor.map((item, index) => {
						return (
							<form key={index} onChange={test} className={styles.changeMentor}>
								{form.map(({ type, name, placeholder }, i) => {
									return (
										<Input
											key={i}
											type={type}
											name={name}
											value={placeholder}
											onChange={e => setChangeMentor(e)}
											style={{ fontSize: '16px', width: '170px' }}
										/>
									)
								})}
							</form>
						)
					})}
				</div>
				<div className={styles.changeMentor__btn}>
					<Button
						onClick={() => {
							if (
								mentor.name !== null &&
								mentor.second_name !== null &&
								mentor.phone !== null
							) {
								console.log(changementor)
							} else {
								console.log(mentor)
							}
						}}
						style={{
							padding: '12px 15px',
							cursor: 'pointer',
							borderRadius: '10px',
							fontSize: '16px',
							background: 'rgb(106, 199, 106)',
							border: 'rgb(106, 199, 106)',
							fontWeight: '600',
							margin: '15px',
						}}
					>
						Сохранить
					</Button>
					<Button
						onClick={() => {
							if (
								mentor.name !== null &&
								mentor.second_name !== null &&
								mentor.phone !== null
							) {
								console.log(changementor)
							} else {
								console.log(mentor)
							}
						}}
						style={{
							padding: '12px 15px',
							cursor: 'pointer',
							borderRadius: '10px',
							fontSize: '16px',
							background: 'rgb(252, 16, 16)',
							border: 'rgb(106, 199, 106)',
							fontWeight: '600',
							margin: '15px',
						}}
					>
						удалить ментора
					</Button>
				</div>
			</div>
		</div>
	)
}

export default ChangeMentor
