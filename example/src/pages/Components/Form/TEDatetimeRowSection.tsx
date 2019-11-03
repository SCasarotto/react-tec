import React from 'react'

import { ComponentTitle } from '../../../components/ComponentTitle'
import { Code } from '../../../components/Code'
import { ComponentSection } from '../../../components/ComponentSection'
import { PropsTable } from '../../../components/PropsTable'

export const TEDatetimeRowSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title="TEDatetimeRow"
				link="https://github.com/SCasarotto/react-tec/blob/master/src/Form/TEDatetimeRow/TEDatetimeRow.js"
			/>
			<p>
				A form row with title and <Code>TEDatetimeInput</Code>. In
				additiona to the props below, reference all props for{' '}
				<Code>TEDatetimeInput</Code>.
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
						note:
							'String used to pair the TELabel to the TEDatetimeInput',
					},
					{
						prop: 'size',
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
				src="https://codesandbox.io/embed/smhx9?fontsize=12&hidenavigation=1&module=%2Fsrc%2FExample.js"
				title="TEDatetimeRow"
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
