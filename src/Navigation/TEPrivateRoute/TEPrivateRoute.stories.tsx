import React, { useState } from 'react'
import { Meta } from '@storybook/react'

import { TEPrivateRoute } from './TEPrivateRoute'
import { Link, Route, Switch } from 'react-router-dom'
import { TEButton } from '../../Form/TEButton'

export default {
	title: 'Navigation/TEPrivateRoute',
	component: TEPrivateRoute,
	argTypes: {},
} as Meta

const Base = () => <p>Base Route</p>
const Authenticated = () => <p>Authenticated Route</p>
const AuthenticatedAdmin = () => <p>AuthenticatedAdmin Route</p>
const AuthenticatedAdminDynamicData = (props: any) => (
	<p>AuthenticatedAdmin Route - data: {props.match.params.someData}</p>
)
const AuthenticatedFailed = () => <p>AuthenticatedFailed Route</p>
const AuthenticatedAdminFailed = () => <p>AuthenticatedAdminFailed Route</p>
const NotFound = () => <p>NotFound Route</p>

export const Default = () => {
	const [auth, setAuth] = useState(false)
	const [authAdmin, setAuthAdmin] = useState(false)

	return (
		<>
			<ul>
				<li>
					<Link to='/TEPrivateRouteExample'>Base</Link>
				</li>
				<li>
					<Link to='/TEPrivateRouteExample/authenticated'>Authenticated</Link>
				</li>
				<li>
					<Link to='/TEPrivateRouteExample/authenticatedAdmin'>AuthenticatedAdmin</Link>
				</li>
				<li>
					<Link to='/TEPrivateRouteExample/authenticatedAdmin/someDynamicData'>
						AuthenticatedAdmin & someDynamicData
					</Link>
				</li>
			</ul>
			<TEButton onClick={() => setAuth(!auth)}>
				Toggle Authenticated To {auth ? 'False' : 'True'}
			</TEButton>
			<TEButton onClick={() => setAuthAdmin(!authAdmin)}>
				Toggle AuthenticatedAdmin To {authAdmin ? 'False' : 'True'}
			</TEButton>
			<Switch>
				<Route path='/TEPrivateRouteExample/' component={Base} exact />
				<TEPrivateRoute
					path='/TEPrivateRouteExample/authenticated'
					component={Authenticated}
					authChecks={[{ check: () => auth, path: '/TEPrivateRouteExample/sign-in' }]}
				/>
				<TEPrivateRoute
					path='/TEPrivateRouteExample/authenticatedAdmin/:someData'
					component={AuthenticatedAdminDynamicData}
					authChecks={[
						{ check: () => auth, path: '/TEPrivateRouteExample/sign-in' },
						{
							check: (props) =>
								authAdmin && props.match.params.someData === 'someDynamicData',
							path: '/TEPrivateRouteExample/403',
						},
					]}
				/>
				<TEPrivateRoute
					path='/TEPrivateRouteExample/authenticatedAdmin'
					component={AuthenticatedAdmin}
					authChecks={[
						{ check: () => auth, path: '/TEPrivateRouteExample/sign-in' },
						{
							check: () => authAdmin,
							path: '/TEPrivateRouteExample/403',
						},
					]}
				/>
				<Route path='/TEPrivateRouteExample/sign-in' component={AuthenticatedFailed} />
				<Route path='/TEPrivateRouteExample/403' component={AuthenticatedAdminFailed} />
				<Route component={NotFound} />
			</Switch>
		</>
	)
}
