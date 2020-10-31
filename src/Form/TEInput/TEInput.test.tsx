import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { TEInput } from './TEInput'

describe('TEInput', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(<TEInput />)
		expect(asFragment()).toMatchSnapshot()
	})

	// Class Name
	it('accepts custom className', () => {
		const { container } = render(<TEInput className='myClassName' />)
		expect(container.firstChild).toHaveClass('myClassName')
	})

	// Ref
	it('renders with ref', async () => {
		const ref: { current: HTMLInputElement | null } = { current: null }
		const { getByTestId } = render(<TEInput ref={ref} data-testid='myInput' />)
		const input = getByTestId('myInput')
		await waitFor(() => expect(input).not.toHaveFocus())
		ref.current?.focus()
		await waitFor(() => expect(input).toHaveFocus())
	})
})
