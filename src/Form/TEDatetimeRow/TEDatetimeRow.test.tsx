import React from 'react'
import { render } from '@testing-library/react'
import { TEDatetimeRow } from './TEDatetimeRow'

describe('TEDatetimeRow', () => {
	it('matches snapshot', () => {
		const { asFragment } = render(
			<TEDatetimeRow labelForKey='myDatetimeRow' onChange={() => {}} />,
		)
		expect(asFragment()).toMatchSnapshot()
	})
})
