import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TEConfirm, TEConfirmProps } from './TEConfirm'

export default {
	title: 'Popup/TEConfirm',
	component: TEConfirm,
	argTypes: {},
} as Meta

const Template: Story<TEConfirmProps> = (args) => <TEConfirm {...args} />

export const Default = Template.bind({})
Default.args = {
	title: 'TEConfirm!',
	message: 'Are you super sure?',
	visible: true,
	leftOnClick: () => console.log('left'),
	leftButtonTitle: 'No',
	rightOnClick: () => console.log('right'),
	rightButtonTitle: 'Yes',
}
