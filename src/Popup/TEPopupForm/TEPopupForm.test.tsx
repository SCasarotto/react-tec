import React from 'react'
import { render } from '@testing-library/react'
import { TEPopupForm } from './TEPopupForm'

describe('TEPopupForm', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(<TEPopupForm visible onClose={() => {}} />)
		expect(asFragment()).toMatchSnapshot()
	})
})
