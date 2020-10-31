import React from 'react'
import { render } from '@testing-library/react'
import { TESegmentedGroup } from './TESegmentedGroup'

describe('TESegmentedGroup', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(
			<TESegmentedGroup
				labelForKey='testTESegmentedGroup'
				checkedValue='someValue'
				buttonArray={['someValue', 'anotherValue']}
				onChange={() => {}}
			/>,
		)
		expect(asFragment()).toMatchSnapshot()
	})
})
