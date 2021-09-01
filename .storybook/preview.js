import React from 'react'
import { AppWrapper } from '../src/Globals/AppWrapper'

export const decorators = [
	(Story) => (
		<AppWrapper>
			<Story />
		</AppWrapper>
	),
]
