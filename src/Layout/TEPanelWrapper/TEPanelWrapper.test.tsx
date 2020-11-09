import React from 'react'
import { render } from '@testing-library/react'
import { TEPanelWrapper } from './TEPanelWrapper'

describe('TEPanelWrapper', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(<TEPanelWrapper />)
		expect(asFragment()).toMatchSnapshot()
	})

	// Class Name
	it('accepts custom className', () => {
		const { container } = render(<TEPanelWrapper className='myClassName' />)
		expect(container.firstChild).toHaveClass('myClassName')
	})
})
