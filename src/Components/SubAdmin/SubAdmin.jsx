import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../..'
import { fetchSubAdmin } from '../../Http/API'
import Button from '../UI/Button'
import HTag from '../UI/Htag'
import CreateAdmin from './CreateAdmin'
import styles from './SubAdmin.module.css'
import SubAdminItem from './SubAdminItem'

const SubAdmin = observer(() => {
	const [isOpen, setIsOpen] = useState(false)
	const [subAdmin, setSubAdmin] = useState([])
	const { Store } = useContext(Context)

	useEffect(() => {
		if (Store.admin !== '') {
			setSubAdmin(Store.admin)
		} else {
			fetchSubAdmin().then(data => setSubAdmin(data))
		}
	}, [])

	return (
		<div className={styles.subAdmin__wrapper}>
			<div className={styles.subAdmin__title}>
				<HTag
					tag={'h1'}
					style={{
						fontSize: '55px',
						fontWeight: '500',
						fontSze: '55px',
						lineHeight: '100%',
						color: 'rgb(0, 0, 0)',
					}}
				>
					Администраторы
				</HTag>
				<div className={styles.create__courses}>
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
						Добавить админа
					</Button>
				</div>
			</div>
			<div className={styles.subAdmin__container}>
				{subAdmin.map((item, i) => {
					return <SubAdminItem subAdmin={item} key={i} />
				})}
			</div>
			<CreateAdmin show={isOpen} setShow={setIsOpen} />
		</div>
	)
})

export default SubAdmin
