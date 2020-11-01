import React from 'react'
import { render } from '@testing-library/react'
import { TEAlert } from './TEAlert'

describe('TEAlert', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(<TEAlert visible />)
		expect(asFragment()).toMatchSnapshot()
	})

	// Class Name
	it('accepts custom className', () => {
		const { container } = render(<TEAlert visible className='myClassName' />)
		expect(container.firstChild).toHaveClass('myClassName')
	})
})
