import React from 'react'

import { ComponentTitle } from '../../../components/ComponentTitle'
import { Code } from '../../../components/Code'
import { ComponentSection } from '../../../components/ComponentSection'
import { PropsTable } from '../../../components/PropsTable'

export const TEPrivateRouteSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title="TEPrivateRoute"
				link="https://github.com/SCasarotto/react-tec/blob/master/src/Navigation/TEPrivateRoute/TEPrivateRoute.js"
			/>
			<p>
				<Code>TEPrivateRoute</Code> provides an easy way to redirect a
				user if they are not signed in or don't have the appropriate
				user permissions. In addition to the props below, review the
				props of a{' '}
				<a href="https://reacttraining.com/react-router/web/api/Route">
					route from react-router
				</a>
				. You will want to be careful when using a <Code>path='/'</Code>{' '}
				or some other path that also matches to <Code>authPath</Code> or{' '}
				<Code>accessDeniedPath</Code> without
				<Code>exact=true</Code> because it will result in an infinate
				loop.
			</p>
			<PropsTable
				propArray={[
					{
						prop: 'isAuthenticated',
						type: 'function',
						note:
							'A function that returns a bool describing whether the user is authenticated. If false, the user will be redirected to the "authPath". The path the user was redirected from will be included in the state under "fromPath".',
					},
					{
						prop: 'hasPermissions',
						type: 'function',
						note:
							'A function that returns a bool describing whether the user has appropriate permissions. This is used when a user is signed in but they try to navigate to a page they do not have appropriate permissions for. If false, the user will be redirected to the "accessDeniedPath".  The path the user was redirected from will be included in the state under "fromPath".',
					},
					{
						prop: 'authPath',
						type: 'string',
						note:
							'path to redirect the user to when "isAuthenticated" returns false. Default: "/signin"',
					},
					{
						prop: 'accessDeniedPath',
						type: 'string',
						note:
							'path to redirect the user to when "hasPermissions" returns false. Default: "/403"',
					},
				]}
			/>
			<iframe
				src="https://codesandbox.io/embed/ytc7i?fontsize=12&module=%2Fsrc%2FExample.js"
				title="TEPrivateRoute"
				style={{
					width: '100%',
					height: 500,
					border: 'none',
				}}
				sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
			/>
		</ComponentSection>
	)
}
