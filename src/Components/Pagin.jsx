import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import Span from './UI/Span'
import '../Global.css'

const Pagin = observer(() => {
	const { Store } = useContext(Context)
	const pageCount = Math.ceil(Store.totalCount / Store.limit)
	const pages = []

	for (let i = 0; i < pageCount; i++) {
		pages.push(i + 1)
	}

	const test = page => {
		Store.setPage(page)
	}

	return (
		<div className='pagination'>
			{pages.map(page => (
				<Span
					style={
						Store.page === page
							? {
									background: 'rgb(89, 40, 229)',
									color: 'white',
									fontSize: '22px',
									lineHeight: '100%',
									margin: '0 10px',
									padding: '2px 5px ',
									borderRadius: '5px',
									cursor: 'pointer',
							  }
							: {
									background: 'rgb(89, 40, 229)',
									color: 'white',
									fontSize: '16px',
									lineHeight: '100%',
									margin: '0 10px',
									padding: '2px 5px ',
									borderRadius: '5px',
									cursor: 'pointer',
							  }
					}
					key={page}
					onClick={() => test(page)}
				>
					{page}
				</Span>
			))}
		</div>
	)
})

export default Pagin
