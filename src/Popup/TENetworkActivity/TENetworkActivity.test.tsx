import React from 'react'
import { render } from '@testing-library/react'
import { TENetworkActivity } from './TENetworkActivity'

describe('TENetworkActivity', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(<TENetworkActivity visible />)
		expect(asFragment()).toMatchSnapshot()
	})

	// Class Name
	it('accepts custom className', () => {
		const { container } = render(<TENetworkActivity visible className='myClassName' />)
		expect(container.firstChild).toHaveClass('myClassName')
	})
})
