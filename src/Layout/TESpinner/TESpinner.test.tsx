import React from 'react'
import { render } from '@testing-library/react'
import { TESpinner } from './TESpinner'

describe('TESpinner', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(<TESpinner />)
		expect(asFragment()).toMatchSnapshot()
	})

	// Class Name
	it('accepts custom className', () => {
		const { container } = render(<TESpinner className='myClassName' />)
		expect(container.firstChild).toHaveClass('myClassName')
	})
})
