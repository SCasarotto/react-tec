import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { TEFileManagerRow } from './TEFileManagerRow'

describe('TEFileManagerRow', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(
			<TEFileManagerRow
				labelForKey='testTEFileManagerRow'
				fileSrcArray={[]}
				onRemove={async () => {}}
				onUpload={async () => {}}
			/>,
		)
		expect(asFragment()).toMatchSnapshot()
	})

	// Class Name
	it('accepts custom className', () => {
		const { container } = render(
			<TEFileManagerRow
				className='myClassName'
				labelForKey='testTEFileManagerRow'
				fileSrcArray={[]}
				onRemove={async () => {}}
				onUpload={async () => {}}
			/>,
		)
		expect(container.firstChild).toHaveClass('myClassName')
	})

	// Ref
	it('renders with ref', async () => {
		const ref: { current: HTMLInputElement | null } = { current: null }
		const { getByTestId } = render(
			<TEFileManagerRow
				labelForKey='testTEFileManagerRow'
				fileSrcArray={[]}
				onRemove={async () => {}}
				onUpload={async () => {}}
				ref={ref}
				data-testid='myFileInput'
			/>,
		)
		const fileInput = getByTestId('myFileInput')
		await waitFor(() => expect(fileInput).not.toHaveFocus())
		ref.current?.focus()
		await waitFor(() => expect(fileInput).toHaveFocus())
	})
})
