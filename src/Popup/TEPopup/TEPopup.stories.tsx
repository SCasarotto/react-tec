import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TEPopup, TEPopupProps } from './TEPopup'

export default {
	title: 'Popup/TEPopup',
	component: TEPopup,
	argTypes: {},
} as Meta

const Template: Story<TEPopupProps> = (args) => <TEPopup {...args} />

export const Default = Template.bind({})
Default.args = {}
