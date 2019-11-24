import React from 'react'

import { ComponentTitle } from '../../../components/ComponentTitle'
import { Code } from '../../../components/Code'
import { ComponentSection } from '../../../components/ComponentSection'
import { PropsTable } from '../../../components/PropsTable'

export const TESelectSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title='TESelect'
				link='https://github.com/SCasarotto/react-tec/blob/master/src/Form/TESelect/index.tsx'
			/>
			<p>
				<Code>TESelect</Code> is simply a styled{' '}
				<a
					href='https://github.com/JedWatson/react-select'
					target='_blank'
					rel='noopener noreferrer'>
					React Select
				</a>{' '}
				Component. A few props have been adjusted or defaulted.
			</p>
			<PropsTable
				propArray={[
					{
						prop: 'disabled',
						type: 'boolean',
						note: 'maps to isDisabled',
					},
				]}
			/>
			<iframe
				src='https://codesandbox.io/embed/react-tec-examples-di382?fontsize=14&initialpath=%2FTESelectExample&module=%2Fsrc%2FForm%2FTESelectExample.tsx'
				title='TESelect'
				style={{
					width: '100%',
					height: 500,
					border: 'none',
				}}
				allow='geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb'
				sandbox='allow-modals allow-forms allow-popups allow-scripts allow-same-origin'
			/>
		</ComponentSection>
	)
}
