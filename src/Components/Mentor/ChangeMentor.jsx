import React, { useContext, useEffect, useState } from 'react'
import styles from './Mentor.module.css'
import { Redirect, useNavigate, useParams } from 'react-router-dom'
import { Context } from '../../index'
import P from '../UI/P'
import Input from '../UI/Input'
import Button from '../UI/Button'
import { deleteMentor, updateMentor } from '../../Http/API'
import H2 from '../UI/H2'

const ChangeMentor = () => {
	const { Store } = useContext(Context)
	let navigate = useNavigate()
	const [mentor, setMentor] = useState([])
	const [hidden, setHidden] = useState(false)
	const [show, setShow] = useState(false)
	const [changementor, setChangeMentor] = useState([])
	const [mentorId, setmentorId] = useState(useParams().id)

	useEffect(() => {
		if (mentor.length < 1) {
			getItem()
		}
	}, [mentor])
	const getItem = () => {
		let i = Store.mentors.filter(item => mentorId == item.id)
		setMentor(i)
		i.map(item =>
			setChangeMentor({
				...changementor,
				name: item.name,
				second_name: item.second_name,
				phone: item.phone,
			})
		)
	}
	const setInfo = event => {
		setChangeMentor({
			...changementor,
			[event.target.name]: event.target.value,
		})
	}
	const setUpData = () => {
		updateMentor(mentorId, changementor).then(data =>
			data.status >= 200 && data.status < 300
				? console.log('goot')
				: console.log('false')
		)
		setHidden(true)
		setShow(true)
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
	const shows = () => {
		setShow(false)
		setTimeout(() => {
			setHidden(false)
			navigate('/mentors')
			window.location.reload()
		}, 1100)
	}
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
							<form
								key={index}
								onChange={setInfo}
								className={styles.changeMentor}
							>
								{form.map(({ type, name, placeholder }, i) => {
									return (
										<Input
											key={i}
											type={type}
											name={name}
											value={placeholder}
											onChange={e => setChangeMentor(e)}
											style={{
												fontSize: '16px',
												width: '170px',
												border: '1px solid',
												borderRadius: '5px',
												paddingLeft: '5px',
											}}
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
								setUpData()
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
						onClick={() =>
							deleteMentor(mentorId).then(data => console.log(data))
						}
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
			<div className={hidden ? styles.model__wrapper : styles.model__none}>
				<div className={show ? styles.model__container : styles.model}>
					<H2>Сообщение</H2>
					<P style={{ marginTop: '10px' }}>Изменения сохранены</P>

					<Button
						onClick={shows}
						style={{
							padding: '10px 20px',
							marginTop: '70px',
							padding: '12px 15px',
							cursor: 'pointer',
							borderRadius: '10px',
							fontSize: '16px',
							background: 'rgb(106, 199, 106)',
							border: 'rgb(106, 199, 106)',
						}}
					>
						OK
					</Button>
				</div>
			</div>
		</div>
	)
}

export default ChangeMentor
