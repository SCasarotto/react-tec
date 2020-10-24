import React from 'react'
import { render } from '@testing-library/react'
import { TETextareaRow } from './TETextareaRow'

describe('TETextareaRow', () => {
	it('matches snapshot', () => {
		const { asFragment } = render(<TETextareaRow labelForKey='testTETextareaRow' />)
		expect(asFragment()).toMatchSnapshot()
	})
})
