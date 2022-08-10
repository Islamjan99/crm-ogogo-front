import React, { useContext, useEffect, useState } from 'react'
import styles from './Mentor.module.css'
import { fetchMentors, putMentors } from '../../Http/MentorsAPI'
import { Context } from '../../index'
import MentorItem from './MentorItem'
import P from '../UI/P'
import Button from '../UI/Button'
import ModalsMentor from './ModalsMentor'
import axios from "axios";



const Mentor = () => {
	const { MentorsStore } = useContext(Context)
	const [mentors, setMentors] = useState([])

	useEffect(() => {
		if (mentors.length < 1) {
			axios.get('http://127.0.0.1:8000/api/mentor/').then(data => setMentors(data.data))
		}
	}, [mentors])
	console.log(mentors)

	// const plus = id => {
	// 	MentorsStore.mentors.map(item => {
	// 		if (item.id === id) {
	// 			putMentors()
	// 		}
	// 	})
	// }

	return (
		<div className={styles.mentors__wrapper}>
			<div className={styles.create__mentor}>
				<Button
					style={{
						padding: '12px 15px',
						fontSize: '18px',
						marginBottom: '15px',
						background: 'rgb(106, 199, 106)',
						border: 'rgb(106, 199, 106)',
						cursor: 'pointer',
					}}
				>
					Добавить ментора
				</Button>
			</div>
			<div className={styles.mentors__container}>
				<div className={styles.mentors__info}>
					<P className={styles.mentor__name}>Имя</P>
					<P className={styles.mentor__secondName}>Фамилия</P>
					<P className={styles.mentor__phone}>Номер телефона</P>
					<div>
						<P className={styles.mentor__quantity}>
							Количестко проведенных занятий за месяц
						</P>
					</div>
					<P className={styles.mentor__secondName}>Редактировать</P>
				</div>
				<div>
					{mentors.map(mentor => {
						return <MentorItem key={mentor.id} mentor={mentor}/>
					})}
				</div>
			</div>
			<ModalsMentor />
		</div>
	)
}

export default Mentor
