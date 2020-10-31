import React from 'react'
import { render } from '@testing-library/react'
import { TETextareaRow } from './TETextareaRow'

describe('TETextareaRow', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(<TETextareaRow labelForKey='testTETextareaRow' />)
		expect(asFragment()).toMatchSnapshot()
	})
})
