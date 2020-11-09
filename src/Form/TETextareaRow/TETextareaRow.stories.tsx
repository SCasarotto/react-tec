import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TETextareaRow, TETextareaRowProps } from './TETextareaRow'

export default {
	title: 'Form/TETextareaRow',
	component: TETextareaRow,
	argTypes: {},
} as Meta

const Template: Story<TETextareaRowProps> = (args) => <TETextareaRow {...args} />

export const Default = Template.bind({})
Default.args = {
	title: 'My Text Area',
	labelForKey: 'SomeUniqueKey42',
	onChange: (e) => console.log(e.target.value),
}
