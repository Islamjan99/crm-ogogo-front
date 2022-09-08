import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Context } from './index'
import { authRoutes, publicRoutes } from './Routes'
import { AUTH_ROUTE } from './Utils/Consts'

export default function AppRouter() {
	const { Store } = useContext(Context)
	return (
		<Routes>
			{Store.isAuth &&
				authRoutes.map(({ path, Component }) => (
					<Route key={path} path={path} component={Component} exact />
				))}
			{publicRoutes.map(({ path, Component }) => (
				<Route key={path} path={path} component={Component} exact />
			))}
			<Navigate to={AUTH_ROUTE} replace />;
		</Routes>
	)
}
