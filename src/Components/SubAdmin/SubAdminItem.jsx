import { observer } from 'mobx-react-lite'
import React from 'react'
import Button from '../UI/Button'

import P from '../UI/P'
import Span from '../UI/Span'
import styles from './SubAdmin.module.css'

const SubAdminItem = observer(({ subAdmin, fun }) => {
	return (
		<div className={styles.adminItem}>
			<div>
				<P style={{ opacity: '0.5' }}>ФИО:</P>
				<Span style={{ fontWeight: '500' }}>{subAdmin.second_name} </Span>
				<Span style={{ fontWeight: '500' }}>{subAdmin.name} </Span>
				<Span style={{ fontWeight: '500' }}>{subAdmin.father_name} </Span>
			</div>
			<div>
				<P style={{ opacity: '0.5' }}>Раб. номер:</P>
				<Span style={{ fontWeight: '500' }}>{subAdmin.work_phone} </Span>
			</div>
			<div>
				<P style={{ opacity: '0.5' }}>Лич. номер:</P>
				<Span style={{ fontWeight: '500' }}>{subAdmin.personal_phone} </Span>
			</div>
			<div>
				<P style={{ opacity: '0.5' }}>Офис:</P>
				<Span style={{ fontWeight: '500' }}>{subAdmin.branch} </Span>
			</div>
			<div>
				<P style={{ opacity: '0.5' }}>user name:</P>
				<Span style={{ fontWeight: '500' }}>{subAdmin.username} </Span>
			</div>
			<Button
				onClick={() => fun(subAdmin.id)}
				style={{
					display: 'flex',
					justifyContent: 'end',
					border: 'none',
					cursor: 'pointer',
					fontWeight: '600',
					fontSize: '14px',
				}}
			>
				Удалить
			</Button>
		</div>
	)
})

export default SubAdminItem
