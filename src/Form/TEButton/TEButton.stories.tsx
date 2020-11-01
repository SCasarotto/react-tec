import React from 'react'
import { Story, Meta } from '@storybook/react'
import {
	Title,
	Subtitle,
	Description,
	Primary,
	ArgsTable,
	Stories,
	PRIMARY_STORY,
} from '@storybook/addon-docs/blocks'

import { TEButton, TEButtonProps } from './TEButton'

export default {
	title: 'Form/TEButton',
	component: TEButton,
	parameters: {
		docs: {
			page: () => (
				<>
					<Title />
					<Subtitle />
					<Description />
					<Primary />
					<ArgsTable story={PRIMARY_STORY} />
					<Stories />
				</>
			),
		},
	},
	argTypes: {
		children: { control: 'text' },
		disabled: { control: 'boolean' },
	},
} as Meta

const Template: Story<TEButtonProps> = (args) => <TEButton {...args} />

export const Default = Template.bind({})
Default.args = {
	children: 'Default',
}
export const Disabled = Template.bind({})
Disabled.args = {
	children: 'Disabled',
	disabled: true,
}
