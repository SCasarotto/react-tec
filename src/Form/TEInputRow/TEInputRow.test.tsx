import React from 'react'
import { render } from '@testing-library/react'
import { TEInputRow } from './TEInputRow'

describe('TEInputRow', () => {
	it('matches snapshot', () => {
		const { asFragment } = render(<TEInputRow labelForKey='testTEInputRow' />)
		expect(asFragment()).toMatchSnapshot()
	})
})
