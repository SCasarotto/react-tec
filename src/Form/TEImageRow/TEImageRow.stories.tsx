import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TEImageRow, TEImageRowProps } from './TEImageRow'

export default {
	title: 'Form/TEImageRow',
	component: TEImageRow,
	argTypes: {},
} as Meta

const Template: Story<TEImageRowProps> = (args) => <TEImageRow {...args} />

export const Default = Template.bind({})
Default.args = {
	labelForKey: 'someUniqueKey',
	imgSrcArray: [
		{
			uid: 'uid1',
			src:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png',
			path: 'some/path/to/where/i/have/this/file',
		},
		{
			uid: 'uids',
			src:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png',
			path: 'some/path/to/where/i/have/this/file',
		},
	],
	onUpload: async (data) => console.log(data),
	onRemove: async (data) => console.log(data),
}
