import React from 'react'

import { ComponentTitle } from '../../../components/ComponentTitle'
import { Code } from '../../../components/Code'
import { ComponentSection } from '../../../components/ComponentSection'

export const TECheckboxInputSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title='TECheckboxInput'
				link='https://github.com/SCasarotto/react-tec/blob/master/src/Form/TECheckboxInput/index.tsx'
			/>
			<p>
				A simple checkbox component. <Code>TECheckboxInput</Code> is simply a styled HTML{' '}
				<Code>{'<input type="checkbox">'}</Code>. All props are passed right through to the
				checkbox. Reference{' '}
				<a
					href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox'
					target='_blank'
					rel='noopener noreferrer'>
					HTML documentation for more information
				</a>
				.
			</p>
			<iframe
				src='https://codesandbox.io/embed/react-tec-examples-di382?fontsize=14&initialpath=%2FTECheckboxInputExample&module=%2Fsrc%2FForm%2FTECheckboxInputExample.tsx'
				style={{
					width: '100%',
					height: 500,
					border: 'none',
				}}
				title='TECheckboxInput'
				allow='geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb'
				sandbox='allow-modals allow-forms allow-popups allow-scripts allow-same-origin'
			/>
		</ComponentSection>
	)
}
