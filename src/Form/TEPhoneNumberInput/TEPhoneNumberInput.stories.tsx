import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TEPhoneNumberInput, TEPhoneNumberInputProps } from './TEPhoneNumberInput'

export default {
	title: 'Form/TEPhoneNumberInput',
	component: TEPhoneNumberInput,
	argTypes: {},
} as Meta

const Template: Story<TEPhoneNumberInputProps> = (args) => <TEPhoneNumberInput {...args} />

export const Default = Template.bind({})
Default.args = {
	onChange: (phoneNumber) => console.log(phoneNumber),
}
