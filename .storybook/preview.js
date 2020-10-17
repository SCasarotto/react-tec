import React from 'react'
import { TEAppWrapper } from '../src/Globals/TEAppWrapper'

export const decorators = [
	(Story) => (
		<TEAppWrapper>
			<Story />
		</TEAppWrapper>
	),
]
