import React from 'react'

import ComponentTitle from './../../../components/ComponentTitle'
import Code from './../../../components/Code'
import Codeblock from './../../../components/Codeblock'
import ComponentSection from './../../../components/ComponentSection'
import PropsTable from './../../../components/PropsTable'

const TEPrivateRouteSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title='TEPrivateRoute'
				link='https://github.com/SCasarotto/react-tec/blob/master/src/Navigation/TEPrivateRoute/TEPrivateRoute.js'
			/>
			<p>
				<Code>TEPrivateRoute</Code> provides an easy way to redirect a user if they are not
				signed in or don't have the appropriate user permissions. In addition to the props
				below, review the props of a{' '}
				<a href='https://reacttraining.com/react-router/web/api/Route'>
					route from react-router
				</a>
				. You will want to be careful when using a <Code>path='/'</Code> or some other path
				that also matches to <Code>authPath</Code> or <Code>accessDeniedPath</Code> without
				<Code>exact=true</Code> because it will result in an infinate loop.
			</p>
			<PropsTable
				propArray={[
					{
						prop: 'isAuthenticated',
						type: 'boolean',
						note:
							'Whether the user is authenticated. If false, the user will be redirected to the "authPath".',
					},
					{
						prop: 'hasPermissions',
						type: 'boolean',
						note:
							'Whether the user has appropriate permissions. This is used when a user is signed in but they try to navigate to a page they do not have appropriate permissions for. If false, the user will be redirected to the "accessDeniedPath".',
					},
					{
						prop: 'authPath',
						type: 'string',
						note:
							'path to redirect the user to when "isAuthenticated" is false. Default: "/signin"',
					},
					{
						prop: 'accessDeniedPath',
						type: 'string',
						note:
							'path to redirect the user to when "hasPermissions" is false. Default: "/403"',
					},
				]}
			/>
			<Codeblock>
				{`<TEPrivateRoute
	path='/'
	exact
	isAuthenticated={firebase.auth().currentUser}
	hasPermissions={userModel.permissions.admin}
	authPath="/login"
	accessDeniedPath="/permission-denied"
/>`}
			</Codeblock>
		</ComponentSection>
	)
}

export default TEPrivateRouteSection
