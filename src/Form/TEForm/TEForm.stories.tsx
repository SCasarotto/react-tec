import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TEForm, TEFormProps } from './TEForm'
import { TEButton } from '../TEButton'

export default {
	title: 'Form/TEForm',
	component: TEForm,
	argTypes: {},
} as Meta

const Template: Story<TEFormProps> = (args) => <TEForm {...args} />

export const Default = Template.bind({})
Default.args = {
	children: <TEButton type='submit'>Submit</TEButton>,
	onSubmit: (e) => {
		e.preventDefault()
		alert('Submitted!')
	},
}
