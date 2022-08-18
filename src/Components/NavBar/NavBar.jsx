import React from 'react'
import { Link } from 'react-router-dom'
import Img from '../UI/Img'
import P from '../UI/P'
import styles from './NavBar.module.css'
import courses from './element-3.svg'
import mentors from './document-text.svg'
import students from './activity.svg'

const NavBar = () => {
	return (
		<div className={styles.navBar__wrapper}>
			<div className={styles.navBar__nav}>
				<Link to={'/courses'}>
					<div className={styles.snavBar__courses}>
						<Img
							style={{ width: '25px', margin: '0 12.64px 0 0' }}
							src={courses}
							alt={'icon students'}
						/>
						<P
							style={{
								color: '#b7c1c5',
								fontWeight: '500',
								fontSize: '22.7504px',
								lineHeight: '19px',
								fontFeatureSettings: "'pnum' on, 'lnum' on",
								color: '#FFFFFF',
							}}
						>
							Курсы
						</P>
					</div>
				</Link>
				<Link to={'/mentors'}>
					<div>
						<Img
							style={{ width: '25px', margin: '0 12.64px 0 0' }}
							src={mentors}
							alt={'icon students'}
						/>
						<P
							style={{
								color: '#b7c1c5',
								fontWeight: '500',
								fontSize: '22.7504px',
								lineHeight: '19px',
								fontFeatureSettings: "'pnum' on, 'lnum' on",
								color: '#FFFFFF',
							}}
						>
							Менторы
						</P>
					</div>
				</Link>
				<Link to={'/students'}>
					<div className={styles.navBar__students}>
						<Img
							style={{ width: '25px', margin: '0 12.64px 0 0' }}
							src={students}
							alt={'icon students'}
						/>
						<P
							style={{
								color: '#b7c1c5',
								fontWeight: '500',
								fontSize: '22.7504px',
								lineHeight: '19px',
								fontFeatureSettings: "'pnum' on, 'lnum' on",
								color: '#FFFFFF',
							}}
						>
							Студенты
						</P>
					</div>
				</Link>
			</div>
		</div>
	)
}

export default NavBar
