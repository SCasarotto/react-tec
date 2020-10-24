import React from 'react'
import { render } from '@testing-library/react'
import { TEFileManagerRow } from './TEFileManagerRow'

describe('TEFileManagerRow', () => {
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
})
