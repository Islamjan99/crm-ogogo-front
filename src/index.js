import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Store from './GlobalStore/Store'
import './Global.css'
import App from './App'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

export const Context = createContext(null)

root.render(
	<StrictMode>
		<Context.Provider
			value={{
				Store: new Store(),
			}}
		>
			<App />
		</Context.Provider>
	</StrictMode>
)
