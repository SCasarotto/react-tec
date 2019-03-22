import React from 'react'

import { TESpinner } from 'react-tec'

import Code from './../../../components/Code'
import ComponentSection from './../../../components/ComponentSection'
import PropsTable from './../../../components/PropsTable'
import ExampleBlock from './../../../components/ExampleBlock'

const TESpinnerSection = () => {
	return (
		<ComponentSection>
			<h2>TESpinner</h2>
			<p>
				<Code>TESpinner</Code> is the greatest loading spinner of all time.
			</p>
			<PropsTable
				propArray={[
					{
						prop: 'size',
						type: 'string',
						note:
							'Defines the size and number of rings of the spinner. Options: ["small", "medium", "large"] Default: "medium"',
					},
					{
						prop: 'innerColor',
						type: 'string (HEX)',
						note: 'Defines the inner most run color. Default: #ffffff',
					},
					{
						prop: 'OuterColor',
						type: 'string (HEX)',
						note: 'Defines the outer most run color. Default: theme.primary',
					},
				]}
			/>
			<ExampleBlock title="Basic (medium)" code={`<TESpinner />`}>
				<TESpinner />
			</ExampleBlock>
			<ExampleBlock title="Small" code={`<TESpinner size='small' />`}>
				<TESpinner size="small" />
			</ExampleBlock>
			<ExampleBlock title="Large" code={`<TESpinner size='large' />`}>
				<TESpinner size="large" />
			</ExampleBlock>
		</ComponentSection>
	)
}

export default TESpinnerSection
