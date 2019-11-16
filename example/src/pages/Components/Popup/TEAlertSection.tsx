import React from 'react'

import { ComponentTitle } from '../../../components/ComponentTitle'
import { Code } from '../../../components/Code'
import { ComponentSection } from '../../../components/ComponentSection'
import { PropsTable } from '../../../components/PropsTable'

export const TEAlertSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title="TEAlert"
				link="https://github.com/SCasarotto/react-tec/blob/master/src/Popup/TEAlert/TEAlert.js"
			/>
			<p>
				<Code>TEAlert</Code> is a simple alert popup typically used to
				display error or success messages.
			</p>
			<PropsTable
				propArray={[
					{
						prop: 'visible',
						type: 'bool',
						note:
							'Sets whether the popup is visible or hidden. Default: false',
					},
					{
						prop: 'title',
						type: 'string',
						note: 'Sets the title of the alert.',
					},
					{
						prop: 'message',
						type: 'string',
						note: 'Sets the message of the alert.',
					},
					{
						prop: 'onClick',
						type: 'function',
						note:
							'Function for when the button is pressed. Most of the time this is used to simply close the popup.',
					},
					{
						prop: 'buttonTitle',
						type: 'string',
						note: 'Sets the button title. Default: "Okay"',
					},
				]}
			/>
			<iframe
				src="https://codesandbox.io/embed/react-tec-examples-di382?fontsize=14&initialpath=%2FTEAlertExample&module=%2Fsrc%2FPopup%2FTEAlertExample.tsx"
				title="TEAlert"
				style={{
					width: '100%',
					height: 500,
					border: 'none',
				}}
				allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
				sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
			/>
		</ComponentSection>
	)
}
