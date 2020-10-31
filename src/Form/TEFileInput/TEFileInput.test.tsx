import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { TEFileInput } from './TEFileInput'

describe('TEFileInput', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(<TEFileInput />)
		expect(asFragment()).toMatchSnapshot()
	})

	// Class Name
	it('accepts custom className', () => {
		const { container } = render(<TEFileInput className='myClassName' />)
		expect(container.firstChild).toHaveClass('myClassName')
	})

	// Ref
	it('renders with ref', async () => {
		const ref: { current: HTMLInputElement | null } = { current: null }
		const { getByTestId } = render(<TEFileInput ref={ref} data-testid='myFileInput' />)
		const fileInput = getByTestId('myFileInput')
		await waitFor(() => expect(fileInput).not.toHaveFocus())
		ref.current?.focus()
		await waitFor(() => expect(fileInput).toHaveFocus())
	})
})
