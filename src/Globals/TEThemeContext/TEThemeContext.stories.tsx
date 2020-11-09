import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TEThemeProvider, TEThemeProviderProps } from './TEThemeContext'

export default {
	title: 'Globals/TEThemeContext',
	component: TEThemeProvider,
	argTypes: {},
} as Meta

const Template: Story<TEThemeProviderProps> = (args) => <TEThemeProvider {...args} />

export const Default = Template.bind({})
Default.args = {}
