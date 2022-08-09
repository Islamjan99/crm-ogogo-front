import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MentorsStore from './GlobalStore/MentorsStore'
import StudentsStore from './GlobalStore/StudentsStore'
import './Global.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

export const Context = createContext(null)

root.render(
	<StrictMode>
		<Context.Provider
			value={{
				MentorsStore: new MentorsStore(),
				devStudentsStoreice: new StudentsStore(),
			}}
		>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Context.Provider>
		,
	</StrictMode>
)
