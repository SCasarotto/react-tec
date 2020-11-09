import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TEMenuButton, TEMenuButtonProps } from './TEMenuButton'
import { TEButton } from '../TEButton'

export default {
	title: 'Form/TEMenuButton',
	component: TEMenuButton,
	argTypes: {},
} as Meta

const Template: Story<TEMenuButtonProps> = (args) => <TEMenuButton {...args} />

export const Default = Template.bind({})
Default.args = {
	title: 'Click Me',
	children: ({ hideMenu }) => {
		return (
			<div>
				<TEButton
					onClick={() => {
						alert('Button 1 Clicked')
						hideMenu()
					}}
				>
					Button 1
				</TEButton>
				<TEButton
					onClick={() => {
						alert('Button 2 Clicked')
						hideMenu()
					}}
				>
					Button 2
				</TEButton>
				<TEButton
					onClick={() => {
						alert('Button 3 Clicked')
						hideMenu()
					}}
				>
					Button 3
				</TEButton>
			</div>
		)
	},
}
