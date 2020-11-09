import React from 'react'
import { render } from '@testing-library/react'
import { TESideNavbar } from './TESideNavbar'

describe('TESideNavbar', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(<TESideNavbar />)
		expect(asFragment()).toMatchSnapshot()
	})

	// Class Name
	it('accepts custom className', () => {
		const { container } = render(<TESideNavbar className='myClassName' />)
		expect(container.firstChild).toHaveClass('myClassName')
	})
})
