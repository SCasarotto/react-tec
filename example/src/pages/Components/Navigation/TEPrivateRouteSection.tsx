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
						prop: 'authChecks',
						type: 'array',
						note:
							'An array of objects to do parmission checking with. See props below',
					},
					{
						prop: 'check',
						type: 'function',
						note:
							'This is a function that is passed the react-router props from the route component as an arguement and must return a boolean. If false the users will be redirected to the corresponding path.',
					},
					{
						prop: 'path',
						type: 'string',
						note:
							'The path the user is redirected to if the check function returns false',
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
