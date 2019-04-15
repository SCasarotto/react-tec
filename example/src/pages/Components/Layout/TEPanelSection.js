import React from 'react'

import { TEPanelWrapper, TEPanel } from 'react-tec'

import ComponentTitle from './../../../components/ComponentTitle'
import Code from './../../../components/Code'
import ComponentSection from './../../../components/ComponentSection'
import PropsTable from './../../../components/PropsTable'
import ExampleBlock from './../../../components/ExampleBlock'

const TEPanelSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title='TEPanel'
				link='https://github.com/SCasarotto/react-tec/blob/master/src/Layout/TEPanel/TEPanel.js'
			/>
			<p>
				<Code>TEPanel</Code> simple containing element containing a{' '}
				<Code>TEPanelTitle</Code>. Is expected to be used as a child of{' '}
				<Code>TEPanelWrapper</Code>. In addition to the props below, view{' '}
				<Code>TEPanelTitle</Code> for additional props.
			</p>
			<PropsTable
				propArray={[
					{
						prop: 'size',
						type: 'string',
						note:
							'Used to place multiple panels in a row. Options: ["full", "two-third" , "half", "third"]',
					},
				]}
			/>
			<ExampleBlock
				title='Basic (full)'
				code={`<TEPanelWrapper>
	<TEPanel title="TEPanel Example" subtitle="Isn't it cool?">
		<p>Some Content Inside</p>
	</TEPanel>
</TEPanelWrapper>`}
			>
				<TEPanelWrapper>
					<TEPanel title='TEPanel Example' subtitle="Isn't it cool?">
						<p>Some Content Inside</p>
					</TEPanel>
				</TEPanelWrapper>
			</ExampleBlock>
			<ExampleBlock
				title='Half'
				code={`<TEPanelWrapper>
	<TEPanel size="half">
		<p>Some Content Inside</p>
	</TEPanel>
	<TEPanel size="half">
		<p>Some Content Inside</p>
	</TEPanel>
</TEPanelWrapper>`}
			>
				<TEPanelWrapper>
					<TEPanel size='half'>
						<p>Some Content Inside</p>
					</TEPanel>
					<TEPanel size='half'>
						<p>Some Content Inside</p>
					</TEPanel>
				</TEPanelWrapper>
			</ExampleBlock>
		</ComponentSection>
	)
}

export default TEPanelSection
