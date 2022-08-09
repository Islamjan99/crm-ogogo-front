import { Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import Home from './Components/Home'
import Auth from './Components/Auth/Auth'
import Header from './Components/Header/Header'
import Mentors from './Components/Mentor/Mentors'
import Students from './Components/Students/Students'
import Courses from './Components/Courses/Courses'

function App() {
	return (
		<div className='App'>
			<Header />
			<Suspense fallback={''}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/auth' element={<Auth />} />
					<Route path='/mentors' element={<Mentors />} />
					<Route path='/Courses' element={<Courses />} />
					<Route path='/students' element={<Students />} />
				</Routes>
			</Suspense>
		</div>
	)
}

export default App
