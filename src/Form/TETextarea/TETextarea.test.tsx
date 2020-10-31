import React from 'react'
import { render } from '@testing-library/react'
import { TETextarea } from './TETextarea'

describe('TETextarea', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(<TETextarea />)
		expect(asFragment()).toMatchSnapshot()
	})
})
