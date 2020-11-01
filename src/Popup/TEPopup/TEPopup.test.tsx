import React from 'react'
import { render } from '@testing-library/react'
import { TEPopup } from './TEPopup'

describe('TEPopup', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(<TEPopup visible />)
		expect(asFragment()).toMatchSnapshot()
	})

	// Class Name
	it('accepts custom className', () => {
		const { container } = render(<TEPopup visible className='myClassName' />)
		expect(container.firstChild).toHaveClass('myClassName')
	})
})
