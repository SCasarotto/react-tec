import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { TEFileRow } from './TEFileRow'

describe('TEFileRow', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(<TEFileRow labelForKey='testTEFileRow' />)
		expect(asFragment()).toMatchSnapshot()
	})

	// Class Name
	it('accepts custom className', () => {
		const { container } = render(
			<TEFileRow className='myClassName' labelForKey='testTEFileRow' />,
		)
		expect(container.firstChild).toHaveClass('myClassName')
	})

	// Ref
	it('renders with ref', async () => {
		const ref: { current: HTMLInputElement | null } = { current: null }
		const { getByTestId } = render(
			<TEFileRow labelForKey='testTEFileManagerRow' ref={ref} data-testid='myFileInput' />,
		)
		const fileInput = getByTestId('myFileInput')
		await waitFor(() => expect(fileInput).not.toHaveFocus())
		ref.current?.focus()
		await waitFor(() => expect(fileInput).toHaveFocus())
	})
})
