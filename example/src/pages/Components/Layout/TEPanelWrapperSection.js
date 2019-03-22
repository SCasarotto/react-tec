import React from 'react'

import Code from './../../../components/Code'
import Codeblock from './../../../components/Codeblock'
import ComponentSection from './../../../components/ComponentSection'
import PropsTable from './../../../components/PropsTable'

const TEPanelWrapperSection = () => {
	return (
		<ComponentSection>
			<h2>TEPanelWrapper</h2>
			<p>
				<Code>TEPanelWrapper</Code>simple layout component meant to be used as the parent of{' '}
				<Code>TEPanel</Code>. Below is the code that wraps this page.
			</p>
			<PropsTable
				propArray={[
					{
						prop: 'wrapperHeight',
						type: 'number',
						note:
							'When set, this makes the min-height: calc(100vh - wrapperHeight). This is nice to have the background color fill the whole page.',
					},
				]}
			/>
			<Codeblock>
				{`<TEPanelWrapper wrapperHeight={80}>
	{/* ... */}
</TEPanelWrapper>`}
			</Codeblock>
		</ComponentSection>
	)
}

export default TEPanelWrapperSection
