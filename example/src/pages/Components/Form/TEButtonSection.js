import React from 'react'

import { TEButton } from 'react-tec'

import ComponentTitle from './../../../components/ComponentTitle'
import Code from './../../../components/Code'
import ComponentSection from './../../../components/ComponentSection'
import ExampleBlock from './../../../components/ExampleBlock'

const TEButtonSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title='TEButton'
				link='https://github.com/SCasarotto/react-tec/blob/master/src/Form/TEButton/TEButton.js'
			/>
			<p>
				A simple button component. <Code>TEButton</Code> is simply a styled HTML{' '}
				<Code>{'<button>'}</Code>. All props are passed right through to the button.
				Reference{' '}
				<a
					href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button'
					target='_blank'
					rel='noopener noreferrer'
				>
					HTML documentation for more information
				</a>
				.
			</p>
			<p>
				Note: The button's <Code>type</Code> is defaulted to <Code>'button'</Code> instead
				of normal HTML where it is defaulted to <Code>'submit'</Code>.
			</p>
			<ExampleBlock
				title='Basic'
				code={`<TEButton
	onClick={() => {
		alert('Clicked!')
	}}
>
	Click Me!
</TEButton>`}
			>
				<TEButton
					onClick={() => {
						alert('Clicked!')
					}}
				>
					Click Me!
				</TEButton>
			</ExampleBlock>
		</ComponentSection>
	)
}

export default TEButtonSection
