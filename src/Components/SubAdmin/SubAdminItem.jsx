import { observer } from 'mobx-react-lite'
import React from 'react'

import P from '../UI/P'
import Span from '../UI/Span'
import styles from './SubAdmin.module.css'

const SubAdminItem = observer(({ subAdmin }) => {
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
				<Span style={{ fontWeight: '500' }}>{subAdmin.branch} </Span>
			</div>
			<div>
				<P style={{ opacity: '0.5' }}>Лич. номер:</P>
				<Span style={{ fontWeight: '500' }}>{subAdmin.branch} </Span>
			</div>
			<div>
				<P style={{ opacity: '0.5' }}>Офис:</P>
				<Span style={{ fontWeight: '500' }}>{subAdmin.branch} </Span>
			</div>
			<div>
				<P style={{ opacity: '0.5' }}>Роль:</P>
				<Span style={{ fontWeight: '500' }}>{subAdmin.branch} </Span>
			</div>
		</div>
	)
})

export default SubAdminItem
