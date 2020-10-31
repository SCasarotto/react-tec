import React from 'react'
import { render } from '@testing-library/react'
import { TEAlert } from './TEAlert'

describe('TEAlert', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(<TEAlert visible />)
		expect(asFragment()).toMatchSnapshot()
	})
})
