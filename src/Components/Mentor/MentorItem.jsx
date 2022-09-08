import React, { useState } from 'react'
import styles from './Mentor.module.css'
import P from '../UI/P'
import iconChange from './pencil-on-a-notes-paper_icon-icons.com_56784.svg'
import Img from '../UI/Img'
import { Link } from 'react-router-dom'
import { createMentorsQuantity, fetchMentorQuantity } from '../../Http/API'
import Span from '../UI/Span'

const MentorItem = ({ mentor, plus }) => {
	const [isActive, setIsActive] = useState(false)
	const [quantityOfClasses, setQuantityOfClasses] = useState()
	const [classes, setClasses] = useState(0)

	const check = async () => {
		let count = 0
		let i
		await fetchMentorQuantity(mentor.id).then(data => (i = data))
		await i.map(item => (count += item.quantity_of_classes))
		setQuantityOfClasses(count)
	}
	check()
	const changeQuantity = str => {
		switch (str) {
			case 'inc':
				setClasses(classes + 1)
				break
			case 'dec':
				setClasses(classes - 1)
				break
			default:
		}
		setIsActive(true)
	}

	const postQuantity = () => {
		if (classes !== 0) {
			let quantity = {
				mentor: mentor.id,
				quantity_of_classes: classes,
			}
			createMentorsQuantity(quantity).then(data => console.log(data))
			window.location.reload()
		}
		setIsActive(false)
	}

	return (
		<div className={styles.mentor__item}>
			<P style={{ opacity: '0.5' }}>Профиль</P>
			<P style={{ fontSize: '16px', marginTop: '10px' }}>ФИО:</P>
			<P
				style={{
					fontSize: '18px',
					margin: '5px 0 10px 0',
					fontWeight: '500',
					borderBottom: '1px solid',
				}}
			>
				{`${mentor.name} ${mentor.second_name}`}
			</P>
			<P style={{ fontSize: '16px', marginTop: '10px' }}>Тел:</P>
			<P
				style={{
					fontSize: '18px',
					margin: '5px 0 10px 0',
					fontWeight: '500',
					borderBottom: '1px solid',
				}}
			>
				{mentor.phone}
			</P>
			<P style={{ fontSize: '16px', marginTop: '10px' }}>Занятий за месяц:</P>
			<div className={styles.mentor__quantity}>
				<P
					style={{
						fontSize: '20px',
						fontWeight: '500',
					}}
				>
					{mentor.quantiy_of_classes}
				</P>
				<P
					style={{
						fontSize: '20px',
						fontWeight: '500',
					}}
				>
					<Span
						style={{
							fontSize: '20px',
							fontWeight: '600',
							marginTop: '10px',
							cursor: 'pointer',
						}}
						onClick={() => changeQuantity('dec')}
					>
						-
					</Span>
					{` ${classes} `}
					<Span
						style={{
							fontSize: '20px',
							fontWeight: '500',
							cursor: 'pointer',
						}}
						onClick={() => changeQuantity('inc')}
					>
						+
					</Span>
				</P>
				{isActive ? (
					<P onClick={postQuantity}>✅</P>
				) : (
					<P style={{ width: '22px' }}>{` `}</P>
				)}
			</div>

			<div className={styles.mentor__edit}>
				<P style={{ fontSize: '16px' }}>{`Изменить: `}</P>
				<Link to={`/change-mentor/${mentor.id}`}>
					<Img style={{ width: '18px' }} src={iconChange} alt={'icon Change'} />
				</Link>
			</div>
		</div>
	)
}

export default MentorItem
