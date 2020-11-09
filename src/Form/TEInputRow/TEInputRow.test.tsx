import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { TEInputRow } from './TEInputRow'

describe('TEInputRow', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(<TEInputRow labelForKey='testTEInputRow' />)
		expect(asFragment()).toMatchSnapshot()
	})

	// Class Name
	it('accepts custom className', () => {
		const { container } = render(
			<TEInputRow labelForKey='testTEInputRow' className='myClassName' />,
		)
		expect(container.firstChild).toHaveClass('myClassName')
	})

	// Ref
	it('renders with ref', async () => {
		const ref: { current: HTMLInputElement | null } = { current: null }
		const { getByTestId } = render(
			<TEInputRow labelForKey='testTEInputRow' ref={ref} data-testid='myInput' />,
		)
		const input = getByTestId('myInput')
		await waitFor(() => expect(input).not.toHaveFocus())
		ref.current?.focus()
		await waitFor(() => expect(input).toHaveFocus())
	})
})
