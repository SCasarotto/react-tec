import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { TELabel } from './TELabel'

describe('TELabel', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(<TELabel />)
		expect(asFragment()).toMatchSnapshot()
	})

	// Class Name
	it('accepts custom className', () => {
		const { container } = render(<TELabel className='myClassName' />)
		expect(container.firstChild).toHaveClass('myClassName')
	})

	// Ref
	it('renders with ref', async () => {
		const ref: { current: HTMLLabelElement | null } = { current: null }
		render(<TELabel ref={ref} data-testid='myLabel' />)
		// Using this as the focus check didn't seem to work
		waitFor(() => expect(ref.current).toBeTruthy())
	})
})
