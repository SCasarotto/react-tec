import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TEPopupForm, TEPopupFormProps } from './TEPopupForm'

export default {
	title: 'Popup/TEPopupForm',
	component: TEPopupForm,
	argTypes: {},
} as Meta

const Template: Story<TEPopupFormProps> = (args) => <TEPopupForm {...args} />

export const Default = Template.bind({})
Default.args = {
	visible: true,
	onClose: () => console.log('onClose'),
	onSubmit: () => console.log('onSubmit'),
	children: <p style={{ textAlign: 'center' }}>Some form goes here!</p>,
}
