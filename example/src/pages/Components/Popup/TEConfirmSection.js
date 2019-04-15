import React, { useState } from 'react'

import { TEConfirm, TEButton } from 'react-tec'

import ComponentTitle from './../../../components/ComponentTitle'
import Code from './../../../components/Code'
import ComponentSection from './../../../components/ComponentSection'
import PropsTable from './../../../components/PropsTable'
import ExampleBlock from './../../../components/ExampleBlock'

const TEConfirmSection = () => {
	const [visible, setVisible] = useState(false)
	const [visible2, setVisible2] = useState(false)

	return (
		<ComponentSection>
			<ComponentTitle
				title='TEConfirm'
				link='https://github.com/SCasarotto/react-tec/blob/master/src/Popup/TEConfirm/TEConfirm.js'
			/>
			<p>
				<Code>TEConfirm</Code> is a simple confirm popup typically used to have the user
				confirm their action.
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
						prop: 'leftOnClick',
						type: 'function',
						note:
							'Function for when the left button is pressed. Most of the time this is used to simply close the popup.',
					},
					{
						prop: 'leftButtonTitle',
						type: 'string',
						note: 'Sets the left button title. Default: "Cancel"',
					},
					{
						prop: 'rightOnClick',
						type: 'function',
						note: 'Function for when the right button is pressed.',
					},
					{
						prop: 'rightButtonTitle',
						type: 'string',
						note: 'Sets the right button title. Default: "Confirm"',
					},
				]}
			/>
			<ExampleBlock
				title='Basic'
				code={`<TEConfirm
	title="TEConfirm!"
	message="Are you super sure?"
	leftOnClick={() => setVisible(false)}
	rightOnClick={() => setVisible(false)}
	visible={visible}
/>
<TEButton onClick={() => setVisible(true)}>Confirm Your Action</TEButton>`}
			>
				<TEConfirm
					title='TEConfirm!'
					message='Are you super sure?'
					leftOnClick={() => setVisible(false)}
					rightOnClick={() => setVisible(false)}
					visible={visible}
				/>
				<TEButton onClick={() => setVisible(true)}>Confirm Your Action</TEButton>
			</ExampleBlock>
			<ExampleBlock
				title='Children'
				code={`<TEConfirm
	title="TEConfirm!"
	message="Are you super sure?"
	visible={visible2}
	leftOnClick={() => setVisible2(false)}
	leftButtonTitle="No"
	rightOnClick={() => setVisible2(false)}
	rightButtonTitle="Yes"
>
	<p style={{ textAlign: 'center' }}>
		Some extra components passed into the body
	</p>
</TEConfirm>
<TEButton onClick={() => setVisible2(true)}>Confirm Your Action</TEButton>`}
			>
				<TEConfirm
					title='TEConfirm!'
					message='Are you super sure?'
					visible={visible2}
					leftOnClick={() => setVisible2(false)}
					leftButtonTitle='No'
					rightOnClick={() => setVisible2(false)}
					rightButtonTitle='Yes'
				>
					<p style={{ textAlign: 'center' }}>
						Some extra components passed into the body
					</p>
				</TEConfirm>
				<TEButton onClick={() => setVisible2(true)}>Confirm Your Action</TEButton>
			</ExampleBlock>
		</ComponentSection>
	)
}

export default TEConfirmSection
