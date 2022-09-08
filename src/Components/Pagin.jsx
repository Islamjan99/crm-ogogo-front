import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import Span from './UI/Span'

const Pagin = observer(() => {
	const { Store } = useContext(Context)
	const pageCount = Math.ceil(Store.totalCount / Store.limit)
	const pages = []

	for (let i = 0; i < pageCount; i++) {
		pages.push(i + 1)
	}

	return (
		<div className='mt-3 d-flex justify-content-center'>
			{pages.map(page => (
				<Span
					key={page}
					active={Store.page === page}
					onClick={() => Store.setPage(page)}
				>
					{page}
				</Span>
			))}
		</div>
	)
})

export default Pagin
