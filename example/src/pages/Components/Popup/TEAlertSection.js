import React, { useState } from 'react'

import { TEAlert, TEButton } from 'react-tec'

import ComponentTitle from './../../../components/ComponentTitle'
import Code from './../../../components/Code'
import ComponentSection from './../../../components/ComponentSection'
import PropsTable from './../../../components/PropsTable'
import ExampleBlock from './../../../components/ExampleBlock'

const TEAlertSection = () => {
	const [visible, setVisible] = useState(false)
	const [visible2, setVisible2] = useState(false)

	return (
		<ComponentSection>
			<ComponentTitle
				title='TEAlert'
				link='https://github.com/SCasarotto/react-tec/blob/master/src/Popup/TEAlert/TEAlert.js'
			/>
			<p>
				<Code>TEAlert</Code> is a simple alert popup typically used to display error or
				success messages.
			</p>
			<PropsTable
				propArray={[
					{
						prop: 'visible',
						type: 'bool',
						note: 'Sets whether the popup is visible or hidden. Default: false',
					},
					{
						prop: 'title',
						type: 'string',
						note: 'Sets the title of the alert.',
					},
					{
						prop: 'message',
						type: 'string',
						note: 'Sets the message of the alert.',
					},
					{
						prop: 'onClick',
						type: 'function',
						note:
							'Function for when the button is pressed. Most of the time this is used to simply close the popup.',
					},
					{
						prop: 'buttonTitle',
						type: 'string',
						note: 'Sets the button title. Default: "Okay"',
					},
				]}
			/>
			<ExampleBlock
				title='Basic'
				code={`<TEAlert
	title="TEAlert!"
	message="You have been alerted to stay alert."
	onClick={() => setVisible(false)}
	visible={visible}
/>
<TEButton onClick={() => setVisible(true)}>Get Alerted</TEButton>`}
			>
				<TEAlert
					title='TEAlert!'
					message='You have been alerted to stay alert.'
					onClick={() => setVisible(false)}
					visible={visible}
				/>
				<TEButton onClick={() => setVisible(true)}>Get Alerted</TEButton>
			</ExampleBlock>
			<ExampleBlock
				title='Children'
				code={`<TEAlert
	title="TEAlert!"
	message="You have been alerted to stay alert."
	onClick={() => setVisible2(false)}
	visible={visible2}
	buttonTitle="Cancel"
>
	<p style={{ textAlign: 'center' }}>
		Some extra components passed into the body
	</p>
</TEAlert>
<TEButton onClick={() => setVisible2(true)}>Get Alerted</TEButton>`}
			>
				<TEAlert
					title='TEAlert!'
					message='You have been alerted to stay alert.'
					onClick={() => setVisible2(false)}
					visible={visible2}
					buttonTitle='Cancel'
				>
					<p style={{ textAlign: 'center' }}>
						Some extra components passed into the body
					</p>
				</TEAlert>
				<TEButton onClick={() => setVisible2(true)}>Get Alerted</TEButton>
			</ExampleBlock>
		</ComponentSection>
	)
}

export default TEAlertSection
