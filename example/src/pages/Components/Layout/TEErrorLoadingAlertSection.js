import React from 'react'

import { TEErrorLoadingAlert } from 'react-tec'

import ComponentTitle from './../../../components/ComponentTitle'
import Code from './../../../components/Code'
import ComponentSection from './../../../components/ComponentSection'
import PropsTable from './../../../components/PropsTable'
import ExampleBlock from './../../../components/ExampleBlock'

const TEErrorLoadingAlertSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title='TEErrorLoadingAlert'
				link='https://github.com/SCasarotto/react-tec/blob/master/src/Layout/TEErrorLoadingAlert/TEErrorLoadingAlert.js'
			/>
			<p>
				<Code>TEErrorLoadingAlert</Code> in a simple component built inside of a{' '}
				<Code>TEPanelWrapper</Code> and <Code>TEPanel</Code> typically used when there is a
				loading error for a whole page.
			</p>
			<PropsTable
				propArray={[
					{
						prop: 'title',
						type: 'string',
						note: 'Alert Title',
					},
					{
						prop: 'message',
						type: 'string',
						note: 'Alert Message',
					},
					{
						prop: 'onClick',
						type: 'function',
						note:
							'Function used for the button. Typically used to navigate the user back or to some other page.',
					},
					{
						prop: 'buttonTitle',
						type: 'string',
						note: 'Button title. If no button title is provided no button will appear.',
					},
				]}
			/>
			<ExampleBlock
				title='Basic'
				code={`<TEErrorLoadingAlert
	title="Error Loading"
	message="There appears to be an error loading the data you requested."
	onClick={() => {
		alert('Button Clicked')
	}}
	buttonTitle="Go Back"
/>`}
			>
				<TEErrorLoadingAlert
					title='Error Loading'
					message='There appears to be an error loading the data you requested.'
					onClick={() => {
						alert('Button Clicked')
					}}
					buttonTitle='Go Back'
				/>
			</ExampleBlock>
		</ComponentSection>
	)
}

export default TEErrorLoadingAlertSection
