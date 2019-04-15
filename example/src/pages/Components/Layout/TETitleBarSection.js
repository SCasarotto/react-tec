import React from 'react'

import ComponentTitle from './../../../components/ComponentTitle'
import Code from './../../../components/Code'
import Codeblock from './../../../components/Codeblock'
import ComponentSection from './../../../components/ComponentSection'
import PropsTable from './../../../components/PropsTable'

const TETitleBarSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title='TETitleBar'
				link='https://github.com/SCasarotto/react-tec/blob/master/src/Layout/TETitleBar/TETitleBar.js'
			/>
			<p>
				<Code>TETitleBar</Code> simple title bar seen at the top of all of the pages. The
				code used in this site is below.
			</p>
			<PropsTable
				propArray={[
					{
						prop: 'title',
						type: 'string',
						note: 'Title set to the left',
					},
					{
						prop: 'leftComponent',
						type: 'React Component',
						note: 'Component placed to the left',
					},
					{
						prop: 'subtitle',
						type: 'string',
						note: 'Subtitle set to the right',
					},
					{
						prop: 'rightComponent',
						type: 'React Component',
						note: 'Component placed to the right',
					},
				]}
			/>
			<Codeblock>{`<TETitleBar title={barTitle} />`}</Codeblock>
		</ComponentSection>
	)
}

export default TETitleBarSection
