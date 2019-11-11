import React from 'react'

import { ComponentTitle } from '../../../components/ComponentTitle'
import { Code } from '../../../components/Code'
import { ComponentSection } from '../../../components/ComponentSection'

export const TEButtonSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title="TEButton"
				link="https://github.com/SCasarotto/react-tec/blob/master/src/Form/TEButton/TEButton.js"
			/>
			<p>
				A simple button component. <Code>TEButton</Code> is simply a
				styled HTML <Code>{'<button>'}</Code>. All props are passed
				right through to the button. Reference{' '}
				<a
					href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button"
					target="_blank"
					rel="noopener noreferrer">
					HTML documentation for more information
				</a>
				.
			</p>
			<p>
				Note: The button's <Code>type</Code> is defaulted to{' '}
				<Code>'button'</Code> instead of normal HTML where it is
				defaulted to <Code>'submit'</Code>.
			</p>
			<iframe
				src="https://codesandbox.io/embed/react-tec-examples-di382?fontsize=14&initialpath=%2FTEButtonExample&module=%2Fsrc%2FForm%2FTEButtonExample.tsx"
				style={{
					width: '100%',
					height: 500,
					border: 'none',
				}}
				title="TEButton"
				allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
				sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
			/>
		</ComponentSection>
	)
}
