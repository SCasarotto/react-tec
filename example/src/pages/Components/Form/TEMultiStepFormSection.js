import React from 'react'

import { TEMultiStepForm, TEInput } from 'react-tec'

import ComponentTitle from './../../../components/ComponentTitle'
import Code from './../../../components/Code'
import ComponentSection from './../../../components/ComponentSection'
import PropsTable from './../../../components/PropsTable'
import ExampleBlock from './../../../components/ExampleBlock'

const TEMultiStepFormSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title='TEMultiStepForm'
				link='https://github.com/SCasarotto/react-tec/blob/master/src/Form/TEMultiStepForm/TEMultiStepForm.js'
			/>
			<p>
				Multiple step form container. <Code>TEMultiStepForm</Code> provides a quick and easy
				way to break a form into multiple parts and present the user with one part at a
				time.
			</p>
			<PropsTable
				// roundedButtons: PropTypes.bool,
				propArray={[
					{
						prop: 'onSubmit',
						type: 'function',
						note:
							'The function that is executed when the next button is pressed while on the last step. *Required *This function must return a resolved or rejected promise.',
					},
					{
						prop: 'stepData',
						type: 'object',
						note: 'Data used to construct and fill each step',
					},
					{
						prop: 'stepData.title',
						type: 'string',
						note: 'Title of step in top stepper row',
					},
					{
						prop: 'stepData.component',
						type: 'React Component',
						note:
							'The form step content. Think of it like this steps children. *Required',
					},
					{
						prop: 'stepData.onPrevious',
						type: 'function',
						note:
							'Function called when the back button is pressed on this step. Could be used to reset some form data. Is not commonly used. *The function must return a resolved or rejected promise.',
					},
					{
						prop: 'stepData.onNext',
						type: 'function',
						note:
							'Function called when the next button is pressed on this step. Commonly used to do validation. *The function must return a resolved or rejected promise.',
					},
					{
						prop: 'onStepChange',
						type: 'function',
						note:
							'Function used to keep track of what the current step number is. This is important when you want to adjust ui external to the form.',
					},
				]}
			/>
			<ExampleBlock
				title='Basic'
				code={`<TEMultiStepForm
	onSubmit={(e) => {
		alert('Submitted!')
		return Promise.resolve()
	}}
	stepData={[
		{
			title: 'Step 1',
			component: <TEInput onChange={(e) => console.log(e.target.value)} />,
			onNext: () => {
				console.log('Heading to step 2!')
				return Promise.resolve()
			},
		},
		{
			title: 'Step 22',
			component: <TEInput onChange={(e) => console.log(e.target.value)} />,
			onPrevious: () => {
				console.log('Heading back to step 1!')
				return Promise.resolve()
			},
			onNext: () => {
				console.log('Heading to step 3!')
				return Promise.resolve()
			},
		},
		{
			title: 'Step 333',
			component: <TEInput onChange={(e) => console.log(e.target.value)} />,
		},
	]}
/>`}
			>
				<TEMultiStepForm
					onSubmit={(e) => {
						alert('Submitted!')
						return Promise.resolve()
					}}
					stepData={[
						{
							title: 'Step 1',
							component: <TEInput onChange={(e) => console.log(e.target.value)} />,
							onNext: () => {
								console.log('Heading to step 2!')
								return Promise.resolve()
							},
						},
						{
							title: 'Step 22',
							component: <TEInput onChange={(e) => console.log(e.target.value)} />,
							onPrevious: () => {
								console.log('Heading back to step 1!')
								return Promise.resolve()
							},
							onNext: () => {
								console.log('Heading to step 3!')
								return Promise.resolve()
							},
						},
						{
							title: 'Step 333',
							component: <TEInput onChange={(e) => console.log(e.target.value)} />,
						},
					]}
				/>
			</ExampleBlock>
		</ComponentSection>
	)
}

export default TEMultiStepFormSection
