import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TEPanel, TEPanelProps } from './TEPanel'
import { TEPanelWrapper } from '../TEPanelWrapper'

export default {
	title: 'Layout/TEPanel',
	component: TEPanel,
	argTypes: {},
} as Meta

const Template: Story<TEPanelProps> = (args) => <TEPanel {...args} />

export const Default = Template.bind({})
Default.args = {
	title: 'TEPanel Example',
	subtitle: 'some other title',
}

export const Sizes = () => (
	<TEPanelWrapper>
		<TEPanel title='TEPanel Example' subtitle="Isn't it cool?">
			<p>Some Content Inside</p>
		</TEPanel>
		<TEPanel size='half'>
			<p>Some Content Inside</p>
		</TEPanel>
		<TEPanel size='half'>
			<p>Some Content Inside</p>
		</TEPanel>
		<TEPanel size='third'>
			<p>Some Content Inside</p>
		</TEPanel>
		<TEPanel size='third'>
			<p>Some Content Inside</p>
		</TEPanel>
		<TEPanel size='third'>
			<p>Some Content Inside</p>
		</TEPanel>
	</TEPanelWrapper>
)
