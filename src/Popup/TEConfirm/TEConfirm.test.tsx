import React from 'react'
import { render } from '@testing-library/react'
import { TEConfirm } from './TEConfirm'

describe('TEConfirm', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(<TEConfirm visible />)
		expect(asFragment()).toMatchSnapshot()
	})
})
