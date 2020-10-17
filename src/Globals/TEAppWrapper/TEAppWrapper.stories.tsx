import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TEAppWrapper, TEAppWrapperProps } from './TEAppWrapper'

export default {
	title: 'Globals/TEAppWrapper',
	component: TEAppWrapper,
	argTypes: {},
} as Meta

const Template: Story<TEAppWrapperProps> = (args) => <TEAppWrapper {...args} />

export const Default = Template.bind({})
Default.args = {}
