import React from 'react'

import ComponentTitle from './../../../components/ComponentTitle'
import Code from './../../../components/Code'
import ComponentSection from './../../../components/ComponentSection'
import PropsTable from './../../../components/PropsTable'

const TEConfirmSection = () => {
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
			<iframe
				src='https://codesandbox.io/embed/lt7wu?fontsize=12&hidenavigation=1&module=%2Fsrc%2FExample.js'
				title='TEConfirm'
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

export default TEConfirmSection
