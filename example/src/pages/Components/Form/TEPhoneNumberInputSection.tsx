import React from 'react'

import { ComponentTitle } from '../../../components/ComponentTitle'
import { ComponentSection } from '../../../components/ComponentSection'

export const TEPhoneNumberInputSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title='TEPhoneNumberInput'
				link='https://github.com/SCasarotto/react-tec/blob/master/src/Form/TEPhoneNumberInput/index.tsx'
			/>
			<p>
				TEPhoneNumberInput is a simple styled{' '}
				<a
					href='https://github.com/catamphetamine/react-phone-number-input'
					target='_blank'
					rel='noopener noreferrer'
				>
					React Phone Number Input
				</a>{' '}
				Component.
			</p>
			<iframe
				src='https://codesandbox.io/embed/react-tec-examples-di382?fontsize=14&initialpath=%2FTEPhoneNumberInputExample&module=%2Fsrc%2FForm%2FTEPhoneNumberInputExample.tsx'
				style={{
					width: '100%',
					height: 500,
					border: 'none',
				}}
				title='TEPhoneNumberInput'
				allow='geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb'
				sandbox='allow-modals allow-forms allow-popups allow-scripts allow-same-origin'
			/>
		</ComponentSection>
	)
}
