import React from 'react'

import { ComponentTitle } from '../../../components/ComponentTitle'
import { Code } from '../../../components/Code'
import { ComponentSection } from '../../../components/ComponentSection'
import { PropsTable } from '../../../components/PropsTable'

export const TEPhoneNumberRowSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title='TEPhoneNumberRow'
				link='https://github.com/SCasarotto/react-tec/blob/master/src/Form/TEPhoneNumberRow/index.tsx'
			/>
			<p>
				A component containing a <Code>TERow</Code>, a <Code>TELabel</Code> and either a{' '}
				<Code>TEPhoneNumberInput</Code>. In addition to the props below, reference all props
				for <Code>TEPhoneNumberInput</Code>.
			</p>
			<PropsTable
				propArray={[
					{
						prop: 'title',
						type: 'string',
						note: 'Title passed to the inner TELabel',
					},
					{
						prop: 'labelForKey',
						type: 'string',
						note: 'String used to pair the TELabel to the TEDatetimeInput',
					},
					{
						prop: 'rowSize',
						type: 'string',
						note: 'Passed to the wrapping TERow',
					},
					{
						prop: 'last',
						type: 'boolean',
						note: 'Passed to the wrapping TERow',
					},
					{
						prop: 'required',
						type: 'boolean',
						note:
							'Passed to the required HTML attribute as well as used to add an asterisk to the end of the title.',
					},
					{
						prop: 'disabled',
						type: 'boolean',
						note:
							'Passed to the required HTML disabled as well as used to adjust styles.',
					},
				]}
			/>
			<iframe
				src='https://codesandbox.io/embed/react-tec-examples-di382?fontsize=14&initialpath=%2FTEPhoneNumberRowExample&module=%2Fsrc%2FForm%2FTEPhoneNumberRowExample.tsx'
				style={{
					width: '100%',
					height: 500,
					border: 'none',
				}}
				title='TEPhoneNumberRow'
				allow='geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb'
				sandbox='allow-modals allow-forms allow-popups allow-scripts allow-same-origin'
			/>
		</ComponentSection>
	)
}