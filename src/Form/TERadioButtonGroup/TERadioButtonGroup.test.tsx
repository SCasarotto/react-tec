import React from 'react'
import { render } from '@testing-library/react'
import { TERadioButtonGroup } from './TERadioButtonGroup'

describe('TERadioButtonGroup', () => {
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
