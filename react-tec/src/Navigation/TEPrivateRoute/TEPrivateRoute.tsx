import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const TEPrivateRoute = (props) => {
	const {
		isAuthenticated,
		hasPermissions,
		authPath,
		accessDeniedPath,
		component: Component,
		...rest
	} = props

	return (
		<Route
			{...rest}
			render={(props) => {
				const isAuthed = isAuthenticated(props)
				const hasPerms = hasPermissions(props)
				if (isAuthed && hasPerms) {
					return Component ? <Component {...props} /> : <Route {...rest} />
				} else if (!isAuthed) {
					return (
						<Redirect
							to={{
								pathname: authPath,
								state: { fromPath: rest.path },
							}}
						/>
					)
				} else if (!hasPerms) {
					return (
						<Redirect
							to={{
								pathname: accessDeniedPath,
								state: { fromPath: rest.path },
							}}
						/>
					)
				} else {
					//Can't Happen
					return null
				}
			}}
		/>
	)
}

TEPrivateRoute.defaultProps = {
	hasPermissions: true,
	authPath: '/signin',
	accessDeniedPath: '/403',
}

export default TEPrivateRoute
