import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TETextarea, TETextareaProps } from './TETextarea'

export default {
	title: 'Form/TETextarea',
	component: TETextarea,
	argTypes: {},
} as Meta

const Template: Story<TETextareaProps> = (args) => <TETextarea {...args} />

export const Default = Template.bind({})
Default.args = {
	onChange: (e) => console.log(e.target.value),
}
