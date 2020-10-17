import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TEFileInput, TEFileInputProps } from './TEFileInput'

export default {
	title: 'Form/TEFileInput',
	component: TEFileInput,
	argTypes: {},
} as Meta

const Template: Story<TEFileInputProps> = (args) => <TEFileInput {...args} />

export const Default = Template.bind({})
Default.args = {}
