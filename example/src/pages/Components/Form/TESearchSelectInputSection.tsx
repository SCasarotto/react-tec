import React from 'react'

import { ComponentTitle } from '../../../components/ComponentTitle'
import { Code } from '../../../components/Code'
import { ComponentSection } from '../../../components/ComponentSection'
import { PropsTable } from '../../../components/PropsTable'

export const TESearchSelectInputSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title='TESearchSelectInput'
				link='https://github.com/SCasarotto/react-tec/blob/master/src/Form/TESearchSelectInput/index.tsx'
			/>
			<p>
				<Code>TESearchSelectInput</Code> is simply a styled{' '}
				<a
					href='https://github.com/selvagsz/react-power-select'
					target='_blank'
					rel='noopener noreferrer'>
					React Power Select
				</a>{' '}
				Component. A few props have been adjusted or defaulted.
			</p>
			<p>
				Note: Styling for this component is not handled the same way as most React TEC
				components. In order to style everything the React Power Select css has been
				internallized in the React TEC global styles. In the future this may be adjusted to
				make styling easier and more consistent with other components.
			</p>
			<PropsTable
				propArray={[
					{
						prop: 'type',
						type: 'string',
						note:
							'String used to indicate whether you would like to be able to select multiple options vs just a single one. Options: ["single", "multi"]. "single" maps to React Power Select component "PowerSelect" where "multi" maps to React Power Select component "PowerSelectMultiple". Reference those docs accordingly',
					},
					{
						prop: 'value',
						type: 'string or object or array',
						note:
							'This maps the React Power Select prop of "selected" for increased React TEC consistency.',
					},
					{
						prop: 'searchEnabled',
						type: 'bool',
						note: 'Defaulted to true',
					},
				]}
			/>
			<iframe
				src='https://codesandbox.io/embed/react-tec-examples-di382?fontsize=14&initialpath=%2FTESearchSelectInputExample&module=%2Fsrc%2FForm%2FTESearchSelectInputExample.tsx'
				title='TESearchSelectInput'
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
