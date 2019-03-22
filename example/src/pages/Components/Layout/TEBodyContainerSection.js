import React from 'react'

import Code from './../../../components/Code'
import Codeblock from './../../../components/Codeblock'
import ComponentSection from './../../../components/ComponentSection'
import PropsTable from './../../../components/PropsTable'

const TEBodyContainerSection = () => {
	return (
		<ComponentSection>
			<h2>TEBodyContainer</h2>
			<p>
				<Code>TEBodyContainer</Code> is really just a sized meant to play well with{' '}
				<Code>TESideNavbar</Code>. Below is the exact code used in this site.
			</p>
			<PropsTable
				propArray={[
					{
						prop: 'sidebarWidth',
						type: 'number',
						note:
							'Number used to determine width and left margin. Should use the same number used in TESideNavbar. Default: 200',
					},
				]}
			/>
			<Codeblock>
				{`<TEBodyContainer>
	<TETitleBar title={barTitle} />
	{children}
</TEBodyContainer>`}
			</Codeblock>
		</ComponentSection>
	)
}

export default TEBodyContainerSection
