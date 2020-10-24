import React from 'react'
import { render } from '@testing-library/react'
import { TEPanel } from './TEPanel'

describe('TEPanel', () => {
	it('matches snapshot', () => {
		const { asFragment } = render(<TEPanel />)
		expect(asFragment()).toMatchSnapshot()
	})
})
