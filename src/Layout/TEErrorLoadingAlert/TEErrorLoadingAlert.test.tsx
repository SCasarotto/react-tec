import React from 'react'
import { render } from '@testing-library/react'
import { TEErrorLoadingAlert } from './TEErrorLoadingAlert'

describe('TEErrorLoadingAlert', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(<TEErrorLoadingAlert />)
		expect(asFragment()).toMatchSnapshot()
	})

	// Class Name
	it('accepts custom className', () => {
		const { container } = render(<TEErrorLoadingAlert className='myClassName' />)
		expect(container.firstChild).toHaveClass('myClassName')
	})
})
