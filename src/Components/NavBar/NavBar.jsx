import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Img from '../UI/Img'
import P from '../UI/P'
import styles from './NavBar.module.css'
import courses from './element-3.svg'
import mentors from './document-text.svg'
import students from './activity.svg'
import logout from './logout.svg'

const NavBar = () => {
	const location = useLocation().pathname
	return (
		<div className={styles.navBar__wrapper}>
			<div className={styles.navBar__nav}>
				<div
					className={
						location === '/sub-Admin'
							? styles.active__subAdmin
							: styles.navBar__subAdmin
					}
				>
					<Link to={'/sub-Admin'}>
						<P
							style={{
								fontWeight: '500',
								fontSize: '22.7504px',
								lineHeight: '19px',
								fontFeatureSettings: "'pnum' on, 'lnum' on",
								color: '#FFFFFF',
							}}
						>
							пользователи
						</P>
					</Link>
				</div>
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
				<div
					className={
						location === '/type-course'
							? styles.active__typeCourse
							: styles.navBar__typeCourse
					}
				>
					<Link to={'/type-course'}>
						<P
							style={{
								fontWeight: '500',
								fontSize: '22.7504px',
								lineHeight: '19px',
								fontFeatureSettings: "'pnum' on, 'lnum' on",
								color: '#FFFFFF',
							}}
						>
							Тип курса
						</P>
					</Link>
				</div>
			</div>
			<div className={styles.navBar__logout}>
				<P
					style={{
						fontWeight: '500',
						fontSize: '22.7504px',
						lineHeight: '19px',
						fontFeatureSettings: "'pnum' on, 'lnum' on",
						color: '#FFFFFF',
					}}
				>
					Выйти
				</P>

				<Img style={{ width: '25px' }} src={logout} alt={'icon students'} />
			</div>
		</div>
	)
}

export default NavBar
