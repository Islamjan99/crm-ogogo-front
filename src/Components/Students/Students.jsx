import React, { useContext, useEffect, useState } from 'react'
import styles from './Students.module.css'
import { Context } from '../../index'
import HTag from '../UI/Htag'
import Button from '../UI/Button'
import P from '../UI/P'
import StudentItem from './StudentItem'
import { observer } from 'mobx-react-lite'
import Input from '../UI/Input'
import searchImg from './icons8-search.svg'
import Img from '../UI/Img'
import { fetchStudents } from '../../Http/API'
import Span from '../UI/Span'

const Students = observer(() => {
	const { Store } = useContext(Context)
	const [loading, setLoading] = useState(true)
	const [students, setStudents] = useState([])
	const [inpSearch, setInpSearch] = useState('')
	const getInfo = () => {
		fetchStudents(Store.token).then(data => setStudents(data.data))

		setLoading(false)
	}
	useEffect(() => {
		if (students.length < 1) {
			getInfo()
		}
	}, [students])
	const filterStudentst = students.filter(prod => {
		return prod.second_name
			.toLowerCase()
			.includes(inpSearch.toLocaleLowerCase())
	})

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
		<div className={styles.students__wrapper}>
			<div className={styles.students__title}>
				<HTag
					tag={'h1'}
					style={{
						fontWeight: '500',
						fontSize: '55px',
						lineHeight: '100%',
						color: '#000000',
					}}
				>
					Студенты
				</HTag>
				<div className={styles.search}>
					<Input
						type={'text'}
						place={'Поиск'}
						style={{
							fontSize: '20px',
							width: '200px',
						}}
						onChange={e => setInpSearch(e.target.value)}
					/>
					<Img
						style={{
							width: '20px',
						}}
						src={searchImg}
						alt={'Картинка поиска'}
					/>
				</div>
			</div>
			<div className={styles.students__info}>
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
					Номер телефона
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
					Курс
				</P>
				<div
					className={window.outerWidth < '1200' ? styles.none : styles.line}
				></div>
				<P
					style={
						window.outerWidth < '1200'
							? {
									display: 'none',
									fontWeight: '500',
									fontSize: '18px',
									lineHeight: '100%',
									color: '#00FF29',
									padding: ' 5px 0',
							  }
							: {
									fontWeight: '500',
									fontSize: '18px',
									lineHeight: '100%',
									color: '#00FF29',
									padding: ' 5px 0',
							  }
					}
				>
					Оплата
				</P>
			</div>
			<div className={styles.students__block}>
				{filterStudentst.map((student, index) => {
					return <StudentItem key={index} student={student} />
				})}
			</div>
		</div>
	)
})

export default Students
