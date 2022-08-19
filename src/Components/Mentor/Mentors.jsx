import React, { useContext, useEffect, useState } from 'react'
import styles from './Mentor.module.css'
import { fetchMentors, putMentors } from '../../Http/API'
import { Context } from '../../index'
import MentorItem from './MentorItem'
import P from '../UI/P'
import Button from '../UI/Button'
import CreateMentor from './CreateMentor'
import { observer } from 'mobx-react-lite'
import H1 from '../UI/H1'

const Mentor = observer(() => {
	const { Store } = useContext(Context)
	const [mentors, setMentors] = useState([])
	const [isOpen, setIsOpen] = useState(false)
	useEffect(() => {}, [mentors])

	return (
		<div className={styles.mentors__wrapper}>
			<div className={styles.mentors__container}>
				<div className={styles.mentors__title}>
					<H1
						style={{
							fontWeight: '500',
							fontSize: '100px',
							lineHeight: '100%',
							color: '#000000',
						}}
					>
						Менторы
					</H1>
					<div className={styles.create__mentor}>
						<Button
							onClick={() => setIsOpen(true)}
							style={{
								padding: '12px 15px',
								fontSize: '18px',
								cursor: 'pointer',
								background: 'rgb(106, 199, 106)',
								border: 'rgb(106, 199, 106)',
							}}
						>
							Добавить ментора
						</Button>
					</div>
				</div>
				<div className={styles.mentors__info}>
					<P>Имя</P>
					<P>Фамилия</P>
					<P>телефон</P>
					<P>Кол. занятий за 1 мес.</P>
					<P>Изменить</P>
				</div>
				<div>
					{Store.mentors.map(mentor => {
						return <MentorItem key={mentor.id} mentor={mentor} />
					})}
				</div>
			</div>
			<CreateMentor show={isOpen} setShow={setIsOpen} />
		</div>
	)
})

export default Mentor
