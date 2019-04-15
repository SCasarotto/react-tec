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
				if (isAuthenticated && hasPermissions) {
					return Component ? <Component {...props} /> : <Route {...rest} />
				} else if (!isAuthenticated) {
					return (
						<Redirect
							to={{
								pathname: { authPath },
								state: { fromPath: rest.path },
							}}
						/>
					)
				} else if (!hasPermissions) {
					return (
						<Redirect
							to={{
								pathname: { accessDeniedPath },
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
