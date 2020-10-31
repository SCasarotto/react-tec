import React from 'react'
import { render } from '@testing-library/react'
import { TERadioButtonGroup } from './TERadioButtonGroup'

describe('TERadioButtonGroup', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(
			<TERadioButtonGroup
				labelForKey='testTERadioButtonGroup'
				checkedValue='someValue'
				buttonArray={['someValue', 'otherValue']}
				onChange={() => {}}
			/>,
		)
		expect(asFragment()).toMatchSnapshot()
	})
})
