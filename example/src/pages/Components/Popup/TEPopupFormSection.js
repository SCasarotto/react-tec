import React, { useState } from 'react'

import { TEPopupForm, TEButton } from 'react-tec'

import ComponentTitle from './../../../components/ComponentTitle'
import Code from './../../../components/Code'
import ComponentSection from './../../../components/ComponentSection'
import PropsTable from './../../../components/PropsTable'
import ExampleBlock from './../../../components/ExampleBlock'

const TEPopupFormSection = () => {
	const [visible, setVisible] = useState(false)

	return (
		<ComponentSection>
			<ComponentTitle
				title='TEPopupForm'
				link='https://github.com/SCasarotto/react-tec/blob/master/src/Popup/TEPopupForm/TEPopupForm.js'
			/>
			<p>
				<Code>TEPopupForm</Code> iis a combination of <Code>TEForm</Code> and{' '}
				<Code>TEPopup</Code>.
			</p>
			<PropsTable
				propArray={[
					{
						prop: 'visible',
						type: 'bool',
						note: 'Sets whether the popup is visible or hidden. Default: false',
					},
					{
						prop: 'onClose',
						type: 'function',
						note:
							'Function for when the left button is pressed. Most of the time this is used to simply close the popup.',
					},
					{
						prop: 'onCloseTitle',
						type: 'string',
						note: 'Sets the left button title. Default: "Cancel"',
					},
					{
						prop: 'onSubmit',
						type: 'function',
						note: 'Function for when the right button is pressed.',
					},
					{
						prop: 'onSubmitTitle',
						type: 'string',
						note: 'Sets the right button title. Default: "Submit"',
					},
				]}
			/>
			<ExampleBlock
				title='Basic'
				code={`<TEPopupForm
	visible={visible}
	onClose={() => setVisible(false)}
	onSubmit={() => setVisible(false)}
>
	<p style={{ textAlign: 'center' }}>Some form goes here!</p>
</TEPopupForm>
<TEButton onClick={() => setVisible(true)}>View Popup Form</TEButton>`}
			>
				<TEPopupForm
					visible={visible}
					onClose={() => setVisible(false)}
					onSubmit={() => setVisible(false)}
				>
					<p style={{ textAlign: 'center' }}>Some form goes here!</p>
				</TEPopupForm>
				<TEButton onClick={() => setVisible(true)}>View Popup Form</TEButton>
			</ExampleBlock>
		</ComponentSection>
	)
}

export default TEPopupFormSection
