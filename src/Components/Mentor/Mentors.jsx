import React, { useContext, useEffect, useState } from 'react'
import styles from './Mentor.module.css'
import '../../Global.css'
import { Context } from '../../index'
import MentorItem from './MentorItem'
import Button from '../UI/Button'
import CreateMentor from './CreateMentor'
import { observer } from 'mobx-react-lite'
import HTag from '../UI/Htag'
import { fetchMentors } from '../../Http/API'
import Span from '../UI/Span'
import ShirtSkeleton from '../ShirtBlock/ShirtSkeleton'

const Mentor = observer(() => {
	const { Store } = useContext(Context)
	const [isOpen, setIsOpen] = useState(false)
	const [loading, setLoading] = useState(true)
	const [mentors, setMentors] = useState([])
	const [mentor, setMentor] = useState([])

	useEffect(() => {
		fetchMentors().then(item => {
			setMentors(item)
			Store.setMentors(item)
			setTimeout(() => {
				setLoading(false)
			}, 500)
		})
	}, [])
	const getInfo = id => {
		Store.courses.map(item => {
			if (item.id === id) {
				mentor.push(item)
				console.log(item)
			}
		})
	}

	return (
		<div className={styles.mentors__wrapper}>
			<div className={styles.mentors__title}>
				<HTag
					tag={'h1'}
					style={{
						fontWeight: '500',
						fontSize: '55px',
						lineHeight: '100%',
						color: '#000000',
					}}
				>
					Менторы
				</HTag>
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
				{loading
					? [...new Array(5)].map((_, index) => <ShirtSkeleton key={index} />)
					: mentors.map(mentor => (
							<MentorItem key={mentor.id} mentor={mentor} fun={getInfo} />
					  ))}
			</div>
			<CreateMentor show={isOpen} setShow={setIsOpen} />
		</div>
	)
})

export default Mentor
