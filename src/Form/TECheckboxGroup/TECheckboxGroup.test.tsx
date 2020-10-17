import React from 'react'
import { render } from '@testing-library/react'
import { TECheckboxGroup } from './TECheckboxGroup'

describe('TECheckboxGroup', () => {
	it('matches snapshot', () => {
		const { asFragment } = render(
			<TECheckboxGroup
				labelForKey='testTECheckboxGroup'
				onChange={() => {}}
				buttonArray={['someValue', 'AnotherValue']}
				checkedValues={['someValue']}
			/>,
		)
		expect(asFragment()).toMatchSnapshot()
	})
})
