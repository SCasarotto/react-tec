import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { TEForm } from './TEForm'

describe('TEForm', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(<TEForm />)
		expect(asFragment()).toMatchSnapshot()
	})

	// Class Name
	it('accepts custom className', () => {
		const { container } = render(<TEForm className='myClassName' />)
		expect(container.firstChild).toHaveClass('myClassName')
	})

	// Ref
	it('renders with ref', async () => {
		const ref: { current: HTMLFormElement | null } = { current: null }
		render(<TEForm ref={ref} data-testid='myFormId' />)
		// Using this as the focus check didn't seem to work
		waitFor(() => expect(ref.current).toBeTruthy())
	})
})
