import React from 'react'
import { Route, Redirect, RouteProps, RouteComponentProps } from 'react-router-dom'

interface TEPrivateRouteAuthCheck {
	check(props: RouteComponentProps<any>): boolean
	path: string
}
export interface TEPrivateRouteProps extends RouteProps {
	authChecks?: TEPrivateRouteAuthCheck[]
}
export const TEPrivateRoute: React.FC<TEPrivateRouteProps> = (props) => {
	const { authChecks, component: Component, ...rest } = props

	return (
		<Route
			{...rest}
			render={(props) => {
				if (authChecks) {
					for (let i = 0; i < authChecks.length; i++) {
						const { check, path } = authChecks[i]
						if (!check(props)) {
							return (
								<Redirect
									to={{
										pathname: path,
										state: { fromPath: rest.path },
									}}
								/>
							)
						}
					}
				}

				return Component ? <Component {...props} /> : <Route {...rest} />
			}}
		/>
	)
}
