import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { useState, Suspense, useContext, useEffect } from 'react'
import Home from './Components/Home'
import Auth from './Components/Auth/Auth'
import SideBar from './Components/SideBar/SideBar'
import Mentors from './Components/Mentor/Mentors'
import Students from './Components/Students/Students'
import Courses from './Components/Courses/Courses'
import ChangeMentor from './Components/Mentor/ChangeMentor'
import CoursePage from './Components/Courses/CoursePage'
import ChangeStudent from './Components/Students/ChangeStudents'
import { Context } from '.'
import { check } from './Http/API'
import Span from './Components/UI/Span'
import Store from './GlobalStore/Store'

function App() {
	const { Store } = useContext(Context)
	// const [loading, setLoading] = useState(true)

	// useEffect(() => {
	// 	check()
	// 		.then(data => {
	// 			Store.setUser(true)
	// 			Store.setIsAuth(true)
	// 		})
	// 		.finally(() => setLoading(false))
	// })

	// if (loading) {
	// 	return (
	// 		<div className='ani'>
	// 			<div className='block'>
	// 				<Span className='ani__l'>L</Span>
	// 				<Span className='ani__o'>o</Span>
	// 				<Span className='ani__a'>a</Span>
	// 				<Span className='ani__d'>d</Span>
	// 				<Span className='ani__i'>i</Span>
	// 				<Span className='ani__n'>n</Span>
	// 				<Span className='ani__g'>g</Span>
	// 				<Span className='ani__1'>.</Span>
	// 				<Span className='ani__2'>.</Span>
	// 				<Span className='ani__3'>.</Span>
	// 			</div>
	// 		</div>
	// 	)
	// }
	return (
		<BrowserRouter>
			{Store.user ? (
				<div className='App'>
					<SideBar />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/auth' element={<Auth />} />
						<Route
							path='/mentors'
							element={Store.isAuth ? <Mentors /> : <Auth />}
						/>
						<Route path='/courses' element={<Courses />} />
						<Route path='/students' element={<Students />} />
						<Route path='/course-page/:id' element={<CoursePage />} />
						<Route path='/change-student/:id' element={<ChangeStudent />} />
						<Route path='/change-mentor/:id' element={<ChangeMentor />} />
					</Routes>
				</div>
			) : (
				<div className='App'>
					<Routes>
						<Route path='/auth' element={<Auth />} />
					</Routes>
				</div>
			)}
		</BrowserRouter>
	)
}

export default App
