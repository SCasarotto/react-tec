import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TEMenuButton, TEMenuButtonProps } from './TEMenuButton'

export default {
	title: 'Form/TEMenuButton',
	component: TEMenuButton,
	argTypes: {},
} as Meta

const Template: Story<TEMenuButtonProps> = (args) => <TEMenuButton {...args} />

export const Default = Template.bind({})
Default.args = {}
