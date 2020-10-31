import React from 'react'
import { render } from '@testing-library/react'
import { TEPanel } from './TEPanel'

describe('TEPanel', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(<TEPanel />)
		expect(asFragment()).toMatchSnapshot()
	})
})
