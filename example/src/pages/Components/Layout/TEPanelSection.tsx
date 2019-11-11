import React from 'react'

import { ComponentTitle } from '../../../components/ComponentTitle'
import { Code } from '../../../components/Code'
import { ComponentSection } from '../../../components/ComponentSection'
import { PropsTable } from '../../../components/PropsTable'

export const TEPanelSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title="TEPanel"
				link="https://github.com/SCasarotto/react-tec/blob/master/src/Layout/TEPanel/TEPanel.js"
			/>
			<p>
				<Code>TEPanel</Code> simple containing element containing a{' '}
				<Code>TEPanelTitle</Code>. Is expected to be used as a child of{' '}
				<Code>TEPanelWrapper</Code>. In addition to the props below,
				view <Code>TEPanelTitle</Code> for additional props.
			</p>
			<PropsTable
				propArray={[
					{
						prop: 'rowSize',
						type: 'string',
						note:
							'Used to place multiple panels in a row. Options: ["full", "three-quarter", two-third", "half", "third", "quarter", "condensed"]',
					},
				]}
			/>
			<iframe
				src="https://codesandbox.io/embed/react-tec-examples-di382?fontsize=14&initialpath=%2FTEPanelExample&module=%2Fsrc%2FLayout%2FTEPanelExample.tsx"
				style={{
					width: '100%',
					height: 500,
					border: 'none',
				}}
				title="TEPanel"
				allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
				sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
			/>
		</ComponentSection>
	)
}
