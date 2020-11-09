import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { TEButton } from './TEButton'

describe('TEButton', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(<TEButton>My Test Button</TEButton>)
		expect(asFragment()).toMatchSnapshot()
	})

	// Class Name
	it('accepts custom className', () => {
		const { container } = render(<TEButton className='myClassName'>My Test Button</TEButton>)
		expect(container.firstChild).toHaveClass('myClassName')
	})

	// Ref
	it('renders with ref', async () => {
		const ref: { current: HTMLButtonElement | null } = { current: null }
		const { getByTestId } = render(<TEButton ref={ref} data-testid='myButton' />)
		const button = getByTestId('myButton')
		await waitFor(() => expect(button).not.toHaveFocus())
		ref.current?.focus()
		await waitFor(() => expect(button).toHaveFocus())
	})
})
