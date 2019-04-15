import React from 'react'

import { TEPanelTitle } from 'react-tec'

import ComponentTitle from './../../../components/ComponentTitle'
import Code from './../../../components/Code'
import ComponentSection from './../../../components/ComponentSection'
import PropsTable from './../../../components/PropsTable'
import ExampleBlock from './../../../components/ExampleBlock'

const TEPanelTitleSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title='TEPanelTitle'
				link='https://github.com/SCasarotto/react-tec/blob/master/src/Layout/TEPanelTitle/TEPanelTitle.js'
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
			<ExampleBlock
				title='Basic (text)'
				code={`<TEPanelTitle title="Title" subtitle="Subtitle" />`}
			>
				<TEPanelTitle title='Title' subtitle='Subtitle' />
			</ExampleBlock>
			<ExampleBlock
				title='Basic (components)'
				code={`<TEPanelTitle
	leftComponent={<button>Some Button</button>}
	rightComponent={<input />}
/>`}
			>
				<TEPanelTitle
					leftComponent={<button>Some Button</button>}
					rightComponent={<input />}
				/>
			</ExampleBlock>
		</ComponentSection>
	)
}

export default TEPanelTitleSection
