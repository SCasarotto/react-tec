import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { TETextareaRow } from './TETextareaRow'

describe('TETextareaRow', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(<TETextareaRow labelForKey='testTETextareaRow' />)
		expect(asFragment()).toMatchSnapshot()
	})

	// Class Name
	it('accepts custom className', () => {
		const { container } = render(
			<TETextareaRow labelForKey='testTETextareaRow' className='myClassName' />,
		)
		expect(container.firstChild).toHaveClass('myClassName')
	})

	// Ref
	it('renders with ref', async () => {
		const ref: { current: HTMLTextAreaElement | null } = { current: null }
		const { getByTestId } = render(
			<TETextareaRow labelForKey='testTETextareaRow' ref={ref} data-testid='myInput' />,
		)
		const input = getByTestId('myInput')
		await waitFor(() => expect(input).not.toHaveFocus())
		ref.current?.focus()
		await waitFor(() => expect(input).toHaveFocus())
	})
})
