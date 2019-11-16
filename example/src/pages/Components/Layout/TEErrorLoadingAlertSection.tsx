import React from 'react'

import { ComponentTitle } from '../../../components/ComponentTitle'
import { Code } from '../../../components/Code'
import { ComponentSection } from '../../../components/ComponentSection'
import { PropsTable } from '../../../components/PropsTable'

export const TEErrorLoadingAlertSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title="TEErrorLoadingAlert"
				link="https://github.com/SCasarotto/react-tec/blob/master/src/Layout/TEErrorLoadingAlert/TEErrorLoadingAlert.js"
			/>
			<p>
				<Code>TEErrorLoadingAlert</Code> in a simple component built
				inside of a <Code>TEPanelWrapper</Code> and <Code>TEPanel</Code>{' '}
				typically used when there is a loading error for a whole page.
			</p>
			<PropsTable
				propArray={[
					{
						prop: 'title',
						type: 'string',
						note: 'Alert Title',
					},
					{
						prop: 'message',
						type: 'string',
						note: 'Alert Message',
					},
					{
						prop: 'onClick',
						type: 'function',
						note:
							'Function used for the button. Typically used to navigate the user back or to some other page.',
					},
					{
						prop: 'buttonTitle',
						type: 'string',
						note:
							'Button title. If no button title is provided no button will appear.',
					},
				]}
			/>
			<iframe
				src="https://codesandbox.io/embed/react-tec-examples-di382?fontsize=14&initialpath=%2FTEErrorLoadingAlertExample&module=%2Fsrc%2FLayout%2FTEErrorLoadingAlertExample.tsx"
				style={{
					width: '100%',
					height: 500,
					border: 'none',
				}}
				title="TEErrorLoadingAlert"
				allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
				sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
			/>
		</ComponentSection>
	)
}
