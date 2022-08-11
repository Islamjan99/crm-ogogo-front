import React, { useEffect } from 'react'
import styles from './Mentor.module.css'
import P from '../UI/P'
import Button from '../UI/Button'

const MentorItem = ({ mentor, plus }) => {
	return (
		<div className={styles.mentor__item}>
			<P className={styles.mentor__name}>{mentor.name}</P>
			<P className={styles.mentor__secondName}>{mentor.second_name}</P>
			<P className={styles.mentor__phone}>{mentor.phone}</P>
			<div className={styles.mentor__quantity}>
				<P>{mentor.quantiy_of_classes}</P>
			</div>
			<div className={styles.mentor__edit}>asd</div>
		</div>
	)
}

export default MentorItem
