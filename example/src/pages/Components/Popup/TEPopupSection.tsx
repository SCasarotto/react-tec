import React from 'react'

import { ComponentTitle } from '../../../components/ComponentTitle'
import { Code } from '../../../components/Code'
import { ComponentSection } from '../../../components/ComponentSection'
import { PropsTable } from '../../../components/PropsTable'

export const TEPopupSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title="TEPopup"
				link="https://github.com/SCasarotto/react-tec/blob/master/src/Popup/TEPopup/TEPopup.js"
			/>
			<p>
				<Code>TEPopup</Code> simple popup component.
			</p>
			<PropsTable
				propArray={[
					{
						prop: 'visible',
						type: 'bool',
						note:
							'Sets whether the popup is visible or hidden. Default: false',
					},
				]}
			/>
			<iframe
				src="https://codesandbox.io/embed/cc7e1?fontsize=12&hidenavigation=1&module=%2Fsrc%2FExample.js"
				title="TEPopup"
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
