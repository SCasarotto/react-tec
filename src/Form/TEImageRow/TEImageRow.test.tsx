import React from 'react'
import { render } from '@testing-library/react'
import { TEImageRow } from './TEImageRow'

describe('TEImageRow', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(
			<TEImageRow
				labelForKey='testTEImageRow'
				imgSrcArray={[]}
				onRemove={async () => {}}
				onUpload={async () => {}}
			/>,
		)
		expect(asFragment()).toMatchSnapshot()
	})

	// Class Name
	it('accepts custom className', () => {
		const { container } = render(
			<TEImageRow
				labelForKey='testTEImageRow'
				imgSrcArray={[]}
				onRemove={async () => {}}
				onUpload={async () => {}}
				className='myClassName'
			/>,
		)
		expect(container.firstChild).toHaveClass('myClassName')
	})
})
