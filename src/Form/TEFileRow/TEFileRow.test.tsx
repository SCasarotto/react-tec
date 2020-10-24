import React from 'react'
import { render } from '@testing-library/react'
import { TEFileRow } from './TEFileRow'

describe('TEFileRow', () => {
	it('matches snapshot', () => {
		const { asFragment } = render(<TEFileRow labelForKey='testTEFileRow' />)
		expect(asFragment()).toMatchSnapshot()
	})
})
