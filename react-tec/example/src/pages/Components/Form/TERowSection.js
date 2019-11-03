import React from 'react'

import ComponentTitle from './../../../components/ComponentTitle'
import Code from './../../../components/Code'
import ComponentSection from './../../../components/ComponentSection'
import PropsTable from './../../../components/PropsTable'

const TERowSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title='TERow'
				link='https://github.com/SCasarotto/react-tec/blob/master/src/Form/TERow/TERow.js'
			/>
			<p>
				Form row component. <Code>TERow</Code> provides a simple way to layout form rows.
				Easily enabling multiple inputs or buttons on the same row.
			</p>
			<PropsTable
				propArray={[
					{
						prop: 'size',
						type: 'string',
						note:
							'Defines the width of the row. Options: ["full", "half", "two-third", "third". "forth", "condensed"]',
					},
					{
						prop: 'last',
						type: 'boolean',
						note:
							'Removes right padding and adds it on the left for the last TERow in the row.',
					},
				]}
			/>
			<iframe
				src='https://codesandbox.io/embed/4xf0m?fontsize=12&hidenavigation=1&module=%2Fsrc%2FExample.js'
				title='TERow'
				style={{
					width: '100%',
					height: 500,
					border: 'none',
				}}
				sandbox='allow-modals allow-forms allow-popups allow-scripts allow-same-origin'
			/>
		</ComponentSection>
	)
}

export default TERowSection
