import React from 'react'

import { ComponentTitle } from '../../../components/ComponentTitle'
import { Code } from '../../../components/Code'
import { ComponentSection } from '../../../components/ComponentSection'
import { PropsTable } from '../../../components/PropsTable'

export const TEPanelTitleSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title="TEPanelTitle"
				link="https://github.com/SCasarotto/react-tec/blob/master/src/Layout/TEPanelTitle/TEPanelTitle.js"
			/>
			<p>
				<Code>TEPanelTitle</Code> simple title row typically used in the{' '}
				<Code>TEPanel</Code>.
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
			<iframe
				src="https://codesandbox.io/embed/56wxz?fontsize=12&hidenavigation=1&module=%2Fsrc%2FExample.js"
				title="TEPanelTitle"
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
