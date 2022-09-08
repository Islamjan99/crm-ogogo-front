import React, { useContext, useState } from 'react'
import styles from './Mentor.module.css'
import { Context } from '../../index'
import MentorItem from './MentorItem'
import Button from '../UI/Button'
import CreateMentor from './CreateMentor'
import { observer } from 'mobx-react-lite'
import H1 from '../UI/H1'

const Mentor = observer(() => {
	const { Store } = useContext(Context)
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className={styles.mentors__wrapper}>
			<div className={styles.mentors__title}>
				<H1
					style={{
						fontWeight: '500',
						fontSize: '55px',
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
							width: '200px',
							padding: '12px 15px',
							fontSize: '18px',
							cursor: 'pointer',
							background: 'rgb(106, 199, 106)',
							border: 'rgb(106, 199, 106)',
							borderRadius: '10px',
						}}
					>
						Добавить ментора
					</Button>
				</div>
			</div>
			<div className={styles.mentor__block}>
				{Store.mentors.map(mentor => {
					return <MentorItem key={mentor.id} mentor={mentor} />
				})}
			</div>
			<CreateMentor show={isOpen} setShow={setIsOpen} />
		</div>
	)
})

export default Mentor
