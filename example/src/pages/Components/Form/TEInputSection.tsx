import React from 'react'

import { ComponentTitle } from '../../../components/ComponentTitle'
import { Code } from '../../../components/Code'
import { ComponentSection } from '../../../components/ComponentSection'

export const TEInputSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title="TEInput"
				link="https://github.com/SCasarotto/react-tec/blob/master/src/Form/TEInput/TEInput.js"
			/>
			<p>
				TEInput is a simple styled <Code>{'<input>'}</Code>. All props
				are passed right through to the input. Reference the{' '}
				<a
					href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"
					target="_blank"
					rel="noopener noreferrer">
					HTML documentation for more information.
				</a>
				.
			</p>
			<iframe
				src="https://codesandbox.io/embed/react-tec-examples-di382?fontsize=14&initialpath=%2FTEInputExample&module=%2Fsrc%2FForm%2FTEInputExample.tsx"
				style={{
					width: '100%',
					height: 500,
					border: 'none',
				}}
				title="TEInput"
				allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
				sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
			/>
		</ComponentSection>
	)
}
