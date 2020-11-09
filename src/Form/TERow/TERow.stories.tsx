import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TERow, TERowProps } from './TERow'
import { TEInput } from '../TEInput'

export default {
	title: 'Form/TERow',
	component: TERow,
	argTypes: {},
} as Meta

const Template: Story<TERowProps> = (args) => <TERow {...args} />

export const Default = Template.bind({})
Default.args = {
	children: <TEInput onChange={(e) => console.log(e.target.value)} />,
}

export const Sizes = () => (
	<>
		<TERow>
			<TEInput onChange={(e) => console.log(e.target.value)} />
		</TERow>
		<TERow rowSize='half'>
			<TEInput onChange={(e) => console.log(e.target.value)} />
		</TERow>
		<TERow rowSize='half' last>
			<TEInput onChange={(e) => console.log(e.target.value)} />
		</TERow>
		<TERow rowSize='two-third'>
			<TEInput onChange={(e) => console.log(e.target.value)} />
		</TERow>
		<TERow rowSize='third' last>
			<TEInput onChange={(e) => console.log(e.target.value)} />
		</TERow>
		<TERow rowSize='half'>
			<TEInput onChange={(e) => console.log(e.target.value)} />
		</TERow>
		<TERow rowSize='forth'>
			<TEInput onChange={(e) => console.log(e.target.value)} />
		</TERow>
		<TERow rowSize='forth' last>
			<TEInput onChange={(e) => console.log(e.target.value)} />
		</TERow>
		<TERow rowSize='condensed'>
			<TEInput onChange={(e) => console.log(e.target.value)} />
		</TERow>
		<TERow rowSize='condensed'>
			<TEInput onChange={(e) => console.log(e.target.value)} />
		</TERow>
		<TERow rowSize='condensed' last>
			<TEInput onChange={(e) => console.log(e.target.value)} />
		</TERow>
	</>
)
