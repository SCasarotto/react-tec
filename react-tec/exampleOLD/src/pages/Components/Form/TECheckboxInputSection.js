import React from 'react'

import ComponentTitle from './../../../components/ComponentTitle'
import Code from './../../../components/Code'
import ComponentSection from './../../../components/ComponentSection'

const TECheckboxInputSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title='TECheckboxInput'
				link='https://github.com/SCasarotto/react-tec/blob/master/src/Form/TECheckboxInput/TECheckboxInput.js'
			/>
			<p>
				A simple checkbox component. <Code>TECheckboxInput</Code> is simply a styled HTML{' '}
				<Code>{'<input type="checkbox">'}</Code>. All props are passed right through to the
				checkbox. Reference{' '}
				<a
					href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox'
					target='_blank'
					rel='noopener noreferrer'
				>
					HTML documentation for more information
				</a>
				.
			</p>
			<iframe
				src='https://codesandbox.io/embed/318sr?fontsize=12&hidenavigation=1&module=%2Fsrc%2FExample.js'
				title='TECheckboxInput'
				style={{
					width: '100%',
					height: 500,
					border: 'none',
				}}
				sandbox='allow-modals allow-forms allow-popups allow-scripts allow-same-origin'
			/>
		</ComponentSection>
	)
}

export default TECheckboxInputSection
