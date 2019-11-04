import React from 'react'

import { ComponentTitle } from '../../../components/ComponentTitle'
import { Code } from '../../../components/Code'
import { ComponentSection } from '../../../components/ComponentSection'
import { PropsTable } from '../../../components/PropsTable'

export const TEPopupFormSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title="TEPopupForm"
				link="https://github.com/SCasarotto/react-tec/blob/master/src/Popup/TEPopupForm/TEPopupForm.js"
			/>
			<p>
				<Code>TEPopupForm</Code> iis a combination of{' '}
				<Code>TEForm</Code> and <Code>TEPopup</Code>.
			</p>
			<PropsTable
				propArray={[
					{
						prop: 'visible',
						type: 'bool',
						note:
							'Sets whether the popup is visible or hidden. Default: false',
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
					{
						prop: 'formName',
						type: 'string',
						note: 'A string to link the submit button to the from.',
					},
				]}
			/>
			<iframe
				src="https://codesandbox.io/embed/1hlf7?fontsize=12&hidenavigation=1&module=%2Fsrc%2FExample.js"
				title="TEPopupForm"
				style={{
					width: '100%',
					height: 500,
					border: 'none',
				}}
				sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
			/>
		</ComponentSection>
	)
}
