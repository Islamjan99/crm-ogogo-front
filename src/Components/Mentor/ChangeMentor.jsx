import React, { useEffect, useState } from 'react'
import styles from './Mentor.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import P from '../UI/P'
import Input from '../UI/Input'
import Button from '../UI/Button'
import {
	deleteMentor,
	fetchMentorPage,
	fetchMentorQuantity,
	updateMentor,
	deleteQuantity,
	check,
} from '../../Http/API'
import H2 from '../UI/H2'
import { observer } from 'mobx-react-lite'
import Span from '../UI/Span'

const ChangeMentor = observer(() => {
	let navigate = useNavigate()
	const [remove, setRemove] = useState(false)
	const [mentor, setMentor] = useState([])
	const [hidden, setHidden] = useState(false)
	const [show, setShow] = useState(false)
	const [quantity, setQuantity] = useState()
	const [loading, setLoading] = useState(true)
	let mentorId = useParams().id

	const getQuantity = async () => {
		let counter = 0
		let i = []
		await fetchMentorQuantity(mentorId).then(item => (i = item))
		await i.map(item => (counter += item.quantity_of_classes))
		await setQuantity(counter)
		await fetchMentorPage(mentorId).then(data => {
			setLoading(false)
			if (data.status >= 200 && data.status <= 300) {
				setMentor(data.data)
			}
		})
	}
	const setInfo = event => {
		setMentor({
			...mentor,
			[event.target.name]: event.target.value,
		})
	}
	const setUpData = str => {
		if (str === 'update') {
			updateMentor(mentorId, mentor).then(data =>
				data.status >= 200 && data.status < 300
					? console.log('goot')
					: console.log('false')
			)
			setHidden(true)
			setShow(true)
		} else if (str === 'delete') {
			deleteMentor(mentorId).then(data => console.log(data))
			setHidden(true)
			setShow(true)
		}
	}
	let form = [
		{ type: 'text', name: 'name', placeholder: `${mentor.name}` },
		{
			type: 'text',
			name: 'second_name',
			placeholder: `${mentor.second_name}`,
		},
		{ type: 'text', name: 'phone', placeholder: `${mentor.phone}` },
	]

	const shows = () => {
		setShow(false)
		setTimeout(() => {
			setHidden(false)
			navigate('/mentors')
			window.location.reload()
		}, 1100)
	}

	getQuantity()
	const resetQuantity = () => {
		deleteQuantity(mentorId).then(data => console.log(data))
	}

	if (loading) {
		return (
			<div className='ani'>
				<div className='block'>
					<Span className='ani__l'>L</Span>
					<Span className='ani__o'>o</Span>
					<Span className='ani__a'>a</Span>
					<Span className='ani__d'>d</Span>
					<Span className='ani__i'>i</Span>
					<Span className='ani__n'>n</Span>
					<Span className='ani__g'>g</Span>
					<Span className='ani__1'>.</Span>
					<Span className='ani__2'>.</Span>
					<Span className='ani__3'>.</Span>
				</div>
			</div>
		)
	}

	return (
		<div className={styles.changeMentor__wrapper}>
			<div className={styles.changeMentor__container}>
				<div>
					<div className={styles.changeMentor__info}>
						<P
							style={{
								fontWeight: '500',
								fontSize: '18px',
								lineHeight: '100%',
								padding: ' 5px 0',
							}}
						>
							Имя
						</P>
						<div className={styles.line}></div>
						<P
							style={{
								fontWeight: '500',
								fontSize: '18px',
								lineHeight: '100%',
								padding: ' 5px 0',
							}}
						>
							Фамилия
						</P>
						<div className={styles.line}></div>
						<P
							style={{
								fontWeight: '500',
								fontSize: '18px',
								lineHeight: '100%',
								color: '#7000FF',
								padding: ' 5px 0',
							}}
						>
							Телефон
						</P>
						<div className={styles.line}></div>
						<P
							style={{
								fontWeight: '500',
								fontSize: '18px',
								lineHeight: '100%',
								color: '#FFA800',
								padding: ' 5px 0',
							}}
						>
							Кол. занятий за 1 мес.
						</P>
					</div>
					<form className={styles.changeMentor}>
						{form.map(({ type, name, placeholder }, i) => {
							return (
								<Input
									type={type}
									name={name}
									key={i}
									value={placeholder}
									onChange={e => setInfo(e)}
									style={{
										fontSize: '16px',
										width: '160px',
										border: '1px solid',
										borderRadius: '5px',
										paddingLeft: '5px',
										marginLeft: '20px',
									}}
								/>
							)
						})}
						<div className={styles.changeMentor__quantity}>
							<P>{quantity} </P>
							<Button
								style={{
									padding: '5px 8px',
									borderRadius: '10px',
									cursor: 'pointer',
								}}
								onClick={() => resetQuantity()}
							>
								Сбросить
							</Button>
						</div>
					</form>
				</div>
				<div className={styles.changeMentor__btn}>
					<Button
						onClick={() => {
							if (
								mentor.name !== null &&
								mentor.second_name !== null &&
								mentor.phone !== null
							) {
								setUpData('update')
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
							if (!remove) {
								setRemove(true)
								setUpData('delete')
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
			<div className={hidden ? styles.model__wrapper : styles.model__none}>
				<div className={show ? styles.model__container : styles.model}>
					<H2>Сообщение</H2>
					<P style={{ marginTop: '10px' }}>
						{remove ? 'Ментор удалён' : 'Изменения сохранены'}
					</P>

					<Button
						onClick={shows}
						style={{
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
})

export default ChangeMentor
