import React, { useEffect, useState } from 'react'
import styles from './Mentor.module.css'
import P from '../UI/P'
import Button from '../UI/Button'
import iconChange from './pencil-on-a-notes-paper_icon-icons.com_56784.svg'
import Img from '../UI/Img'
import ChangeMentor from './ChangeMentor'
import { Link } from 'react-router-dom'

const MentorItem = ({ mentor, plus }) => {
	const [isActive, setIsActive] = useState()
	const mentorChange = () => {}
	return (
		<div className={styles.mentor__item}>
			<P className={styles.mentor__name}>{mentor.name}</P>
			<P className={styles.mentor__secondName}>{mentor.second_name}</P>
			<P className={styles.mentor__phone}>{mentor.phone}</P>
			<div className={styles.mentor__quantity}>
				<P>{mentor.quantiy_of_classes}</P>
			</div>
			<div className={styles.mentor__edit}>
				<Link to={`/change-mentor/${mentor.id}`}>
					<Img
						style={{ width: '18px' }}
						src={iconChange}
						alt={'icon Change'}
						isActive={isActive}
						setIsActive={setIsActive}
					/>
				</Link>
			</div>
		</div>
	)
}

export default MentorItem
