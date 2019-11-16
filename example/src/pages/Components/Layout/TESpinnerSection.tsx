import React from 'react'

import { ComponentTitle } from '../../../components/ComponentTitle'
import { Code } from '../../../components/Code'
import { ComponentSection } from '../../../components/ComponentSection'
import { PropsTable } from '../../../components/PropsTable'

export const TESpinnerSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title="TESpinner"
				link="https://github.com/SCasarotto/react-tec/blob/master/src/Layout/TESpinner/TESpinner.js"
			/>
			<p>
				<Code>TESpinner</Code> is the greatest loading spinner of all
				time.
			</p>
			<PropsTable
				propArray={[
					{
						prop: 'rowSize',
						type: 'string',
						note:
							'Defines the size and number of rings of the spinner. Options: ["small", "medium", "large"] Default: "medium"',
					},
					{
						prop: 'innerColor',
						type: 'string (HEX)',
						note:
							'Defines the inner most run color. Default: #ffffff',
					},
					{
						prop: 'OuterColor',
						type: 'string (HEX)',
						note:
							'Defines the outer most run color. Default: theme.primary',
					},
				]}
			/>
			<iframe
				src="https://codesandbox.io/embed/react-tec-examples-di382?fontsize=14&initialpath=%2FTESpinnerExample&module=%2Fsrc%2FLayout%2FTESpinnerExample.tsx"
				style={{
					width: '100%',
					height: 500,
					border: 'none',
				}}
				title="TESpinner"
				allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
				sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
			/>
		</ComponentSection>
	)
}
