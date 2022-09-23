import React, { useContext, useState } from 'react'
import HTag from '../UI/Htag'
import styles from './TypeCourse.module.css'
import Button from '../UI/Button'
import { Context } from '../..'
import P from '../UI/P'
import Input from '../UI/Input'
import { observer } from 'mobx-react-lite'
import Img from '../UI/Img'
import imageDelete from './biggarbagebin_121980.svg'
import { createCourseType, deleteCourseType } from '../../Http/API'
import Span from '../UI/Span'
import Modals from '../../Modals'

const TypeCourse = observer(() => {
	const { Store } = useContext(Context)
	const [value, setValue] = useState()
	const [message, setMessage] = useState()
	const [hidden, setHidden] = useState(false)
	const [fun, setFun] = useState()
	const [idTypeCourse, setIdTypeCourse] = useState(0)

	const createType = async () => {
		await createCourseType(value)
		await window.location.reload()
	}
	const deleteType = async () => {
		await deleteCourseType(idTypeCourse)
		await window.location.reload()
	}
	const check = async str => {
		if (str === 'сохранить') {
			if (value !== undefined && value !== null) {
				setFun(true)
				setHidden(true)
				setMessage('Добавить новый тип курса?')
			} else {
				setMessage('Введите название типа курса!')

				setHidden(true)
			}
		} else {
			setMessage('Вы действительно хотите удалить тип курса?')
			setFun(false)
			setHidden(true)
		}
	}

	return (
		<div className={styles.typeCourse__wrapper}>
			<div className={styles.typeCourse__title}>
				<HTag tag={'h1'} style={{ fontSize: '35px' }}>
					Тип курса
				</HTag>
				<Button
					onClick={() => check('сохранить')}
					style={{
						width: '200px',
						padding: '12px 15px',
						fontSize: '16px',
						cursor: 'pointer',
						background: 'rgb(106, 199, 106)',
						border: 'rgb(106, 199, 106)',
						borderRadius: '10px',
						marginTop: '15px',
					}}
				>
					Добавить тип курса
				</Button>
				<Input
					onChange={e => setValue({ type: e.target.value })}
					type={'text'}
					place={'название типа курса'}
					style={{
						display: 'block',
						margin: ' 15px auto',
						border: '1px solid',
						padding: '10px',
						borderRadius: '10px',
						fontSize: '18px',
					}}
				/>
			</div>
			<div className={styles.typeCourse__block}>
				{Store.typeCourse.map((item, i) => {
					return (
						<div key={i} className={styles.typeCourse__item}>
							<Span>{item.type}</Span>
							<Img
								style={{ width: '15px', cursor: 'pointer' }}
								onClick={() => {
									setIdTypeCourse(item.id)
									check('удалить')
								}}
								src={imageDelete}
								alt={'delete type'}
							/>
						</div>
					)
				})}
			</div>
			<div className={hidden ? styles.modal : styles.modal__none}>
				<Modals
					show={hidden}
					setShow={setHidden}
					fun={fun ? createType : deleteType}
					info={message}
				/>
			</div>
		</div>
	)
})

export default TypeCourse
