import React from 'react'
import { render } from '@testing-library/react'
import { TEImageRow } from './TEImageRow'

describe('TEImageRow', () => {
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
})
