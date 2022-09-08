import {
	AUTH_ROUTE,
	MENTORS_ROUTE,
	COURSES_ROUTE,
	HOME_ROUTE,
	STUDENTS_ROUTE,
} from './Utils/Consts'
import Mentors from './Components/Mentor/Mentors'
import Courses from './Components/Courses/Courses'
import Students from './Components/Students/Students'
import Home from './Components/Home'
import Auth from './Components/Auth/Auth'

export const authRoutes = [
	{
		path: MENTORS_ROUTE,
		Component: Mentors,
	},
	{
		path: COURSES_ROUTE,
		Component: Courses,
	},
	{
		path: STUDENTS_ROUTE,
		Component: Students,
	},
	{
		path: HOME_ROUTE,
		Component: Home,
	},
]

export const publicRoutes = [
	{
		path: AUTH_ROUTE,
		Component: Auth,
	},
]
