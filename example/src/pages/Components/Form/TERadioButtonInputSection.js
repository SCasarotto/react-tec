import React from 'react'

import { TERadioButtonInput } from 'react-tec'

import ComponentTitle from './../../../components/ComponentTitle'
import Code from './../../../components/Code'
import ComponentSection from './../../../components/ComponentSection'
import ExampleBlock from './../../../components/ExampleBlock'

const TERadioButtonInputSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title='TERadioButtonInput'
				link='https://github.com/SCasarotto/react-tec/blob/master/src/Form/TERadioButtonInput/TERadioButtonInput.js'
			/>
			<p>
				A simple checkbox component. <Code>TERadioButtonInput</Code> is simply a styled HTML{' '}
				<Code>{'<input type="radio">'}</Code>. All props are passed right through to the
				checkbox. Reference{' '}
				<a
					href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio'
					target='_blank'
					rel='noopener noreferrer'
				>
					HTML documentation for more information
				</a>
				.
			</p>
			<ExampleBlock
				title='Basic'
				code={`<TERadioButtonInput
	onChange={(e) => console.log(e.target.value)}
	value="agreeToEmailSpam"
/>`}
			>
				<TERadioButtonInput
					onChange={(e) => console.log(e.target.value)}
					value='agreeToEmailSpam'
				/>
			</ExampleBlock>
		</ComponentSection>
	)
}

export default TERadioButtonInputSection
