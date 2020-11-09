import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TEPanelTitle, TEPanelTitleProps } from './TEPanelTitle'

export default {
	title: 'Layout/TEPanelTitle',
	component: TEPanelTitle,
	argTypes: {},
} as Meta

const Template: Story<TEPanelTitleProps> = (args) => <TEPanelTitle {...args} />

export const Default = Template.bind({})
Default.args = {
	title: 'Title',
	subtitle: 'Subtitle',
}

export const Components = Template.bind({})
Components.args = {
	leftComponent: <button>Some Button</button>,
	rightComponent: <input />,
}
