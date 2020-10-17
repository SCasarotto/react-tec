import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TEPhoneNumberRow, TEPhoneNumberRowProps } from './TEPhoneNumberRow'

export default {
	title: 'Form/TEPhoneNumberRow',
	component: TEPhoneNumberRow,
	argTypes: {},
} as Meta

const Template: Story<TEPhoneNumberRowProps> = (args) => <TEPhoneNumberRow {...args} />

export const Default = Template.bind({})
Default.args = {}
