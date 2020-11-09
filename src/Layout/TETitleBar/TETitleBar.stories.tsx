import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TETitleBar, TETitleBarProps } from './TETitleBar'

export default {
	title: 'Layout/TETitleBar',
	component: TETitleBar,
	argTypes: {},
} as Meta

const Template: Story<TETitleBarProps> = (args) => <TETitleBar {...args} />

export const Default = Template.bind({})
Default.args = {
	title: 'Some title',
}
