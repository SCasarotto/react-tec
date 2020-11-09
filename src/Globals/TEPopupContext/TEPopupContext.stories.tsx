import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TEPopupProvider } from './TEPopupContext'

export default {
	title: 'Globals/TEPopupContext',
	component: TEPopupProvider,
	argTypes: {},
} as Meta

const Template: Story = (args) => <TEPopupProvider {...args} />

export const Default = Template.bind({})
Default.args = {}
