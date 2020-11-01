import React from 'react'
import { render } from '@testing-library/react'
import { TEPanelTitle } from './TEPanelTitle'

describe('TEPanelTitle', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(<TEPanelTitle />)
		expect(asFragment()).toMatchSnapshot()
	})

	// Class Name
	it('accepts custom className', () => {
		const { container } = render(<TEPanelTitle className='myClassName' />)
		expect(container.firstChild).toHaveClass('myClassName')
	})
})
