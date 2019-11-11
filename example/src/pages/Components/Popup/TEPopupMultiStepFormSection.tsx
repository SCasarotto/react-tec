import React from 'react'

import { ComponentTitle } from '../../../components/ComponentTitle'
import { Code } from '../../../components/Code'
import { ComponentSection } from '../../../components/ComponentSection'
import { PropsTable } from '../../../components/PropsTable'

export const TEPopupMultiStepFormSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title="TEPopupMultiStepForm"
				link="https://github.com/SCasarotto/react-tec/blob/master/src/Popup/TEPopupMultiStepForm/TEPopupMultiStepForm.js"
			/>
			<p>
				<Code>TEPopupMultiStepForm</Code> is a combination of{' '}
				<Code>TEPopup</Code> and <Code>TEMultiStepForm</Code>. Besides
				the props below, reference <Code>TEMultiStepForm</Code> for
				additional props.
			</p>
			<PropsTable
				propArray={[
					{
						prop: 'visible',
						type: 'bool',
						note: 'Sets whether the popup is visible or hidden.',
					},
				]}
			/>
			<iframe
				src="https://codesandbox.io/embed/react-tec-examples-di382?fontsize=14&initialpath=%2FTEPopupMultiStepFormExample&module=%2Fsrc%2FPopup%2FTEPopupMultiStepFormExample.tsx"
				title="TEPopupMultiStepForm"
				style={{
					width: '100%',
					height: 500,
					border: 'none',
				}}
				allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
				sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
			/>
		</ComponentSection>
	)
}
