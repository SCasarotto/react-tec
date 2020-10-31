import React from 'react'
import { render } from '@testing-library/react'
import { TERow } from './TERow'

describe('TERow', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(<TERow />)
		expect(asFragment()).toMatchSnapshot()
	})
})
