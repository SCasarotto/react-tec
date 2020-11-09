import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TEFileManagerRow, TEFileManagerRowProps } from './TEFileManagerRow'

export default {
	title: 'Form/TEFileManagerRow',
	component: TEFileManagerRow,
	argTypes: {},
} as Meta

const Template: Story<TEFileManagerRowProps> = (args) => <TEFileManagerRow {...args} />

export const Default = Template.bind({})
Default.args = {
	labelForKey: 'someUniqueString',
	fileSrcArray: [
		{
			uid: 'uid1',
			src:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png',
			filename: 'SomeFile',
			fileEnding: 'png',
			path: 'some/path/to/where/i/have/this/file',
		},
		{
			uid: 'uid2',
			src:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png',
			filename: 'SomeTotallyDifferentFile',
			fileEnding: 'png',
			path: 'some/path/to/where/i/have/this/file',
		},
		{
			uid: 'uid3',
			src:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png',
			filename: 'NotTheSameFileAsThoseOtherOnes',
			fileEnding: 'png',
			path: 'some/path/to/where/i/have/this/file',
		},
	],
	onUpload: async (files) => {
		console.log(files)
		Promise.resolve()
	},
	onRemove: async (data) => console.log(data),
}
