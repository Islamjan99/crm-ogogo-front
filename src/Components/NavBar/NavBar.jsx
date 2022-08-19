import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Img from '../UI/Img'
import P from '../UI/P'
import styles from './NavBar.module.css'
import courses from './element-3.svg'
import mentors from './document-text.svg'
import students from './activity.svg'

const NavBar = () => {
	const location = useLocation().pathname
	return (
		<div className={styles.navBar__wrapper}>
			<div className={styles.navBar__nav}>
				<div
					className={
						location === '/courses'
							? styles.active__courses
							: styles.navBar__courses
					}
				>
					<Link to={'/courses'}>
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
					</Link>
					<Img style={{ width: '25px' }} src={courses} alt={'icon students'} />
				</div>

				<div
					className={
						location === '/mentors'
							? styles.active__mentors
							: styles.navBar__mentors
					}
				>
					<Link to={'/mentors'}>
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
					</Link>
					<Img style={{ width: '25px' }} src={mentors} alt={'icon students'} />
				</div>

				<div
					className={
						location === '/students'
							? styles.active__students
							: styles.navBar__students
					}
				>
					<Link to={'/students'}>
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
					</Link>
					<Img style={{ width: '25px' }} src={students} alt={'icon students'} />
				</div>
			</div>
		</div>
	)
}

export default NavBar
