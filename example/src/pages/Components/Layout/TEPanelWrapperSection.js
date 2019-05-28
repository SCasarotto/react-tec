import React from 'react'

import ComponentTitle from './../../../components/ComponentTitle'
import Code from './../../../components/Code'
import Codeblock from './../../../components/Codeblock'
import ComponentSection from './../../../components/ComponentSection'

const TEPanelWrapperSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title='TEPanelWrapper'
				link='https://github.com/SCasarotto/react-tec/blob/master/src/Layout/TEPanelWrapper/TEPanelWrapper.js'
			/>
			<p>
				<Code>TEPanelWrapper</Code> simple layout component meant to be used as the parent
				of <Code>TEPanel</Code>. Below is the code that wraps this page.
			</p>
			<Codeblock>
				{`<TEPanelWrapper>
	{/* ... */}
</TEPanelWrapper>`}
			</Codeblock>
		</ComponentSection>
	)
}

export default TEPanelWrapperSection
