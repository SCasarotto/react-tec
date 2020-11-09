import React from 'react'
import { render } from '@testing-library/react'
import { TEBodyContainer } from './TEBodyContainer'

describe('TEBodyContainer', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(<TEBodyContainer />)
		expect(asFragment()).toMatchSnapshot()
	})

	// Class Name
	it('accepts custom className', () => {
		const { container } = render(<TEBodyContainer className='myClassName' />)
		expect(container.firstChild).toHaveClass('myClassName')
	})
})
