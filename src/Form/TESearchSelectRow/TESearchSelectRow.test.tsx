import React from 'react'
import { render } from '@testing-library/react'
import { TESearchSelectRow } from './TESearchSelectRow'

describe('TESearchSelectRow', () => {
	it('matches snapshot', () => {
		const { asFragment } = render(
			<TESearchSelectRow labelForKey='testTESearchSelectRow' onChange={() => {}} />,
		)
		expect(asFragment()).toMatchSnapshot()
	})
})
